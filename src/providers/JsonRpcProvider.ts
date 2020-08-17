import { HttpJsonRpcConnector, JsonRpcConnectionOptions } from '../connectors/HttpJsonRpcConnector';
import { Version, Cid, TipSet } from './Types';
import { Connector, JsonRpcResponse, JsonRpcError } from '../connectors/Connector';

export class JsonRpcProvider {
  public conn: Connector;

  constructor(connector: Connector) {
    this.conn = connector;
  }

  public async version(): Promise<Version> {
    const ret = await this.conn.request({ method: 'Filecoin.Version' });
    return ret as Version;
  }

  public async readObj(cid: Cid): Promise<string> {
    const ret = await this.conn.request({ method: 'Filecoin.ChainReadObj', params: [cid] });
    return ret as string;
  }

  public async getHead(): Promise<TipSet> {
    const ret = await this.conn.request({ method: 'Filecoin.ChainHead' });
    return ret as TipSet;
  }

  public async getBlock(blockCid: Cid): Promise<TipSet> {
    const ret = await this.conn.request({ method: 'Filecoin.ChainGetBlock', params: [blockCid] });
    return ret as TipSet;
  }
}
