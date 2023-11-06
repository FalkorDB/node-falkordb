import TestUtils from '@falkordb/test-utils';
import RedisGraph from '.';

export default new TestUtils({
    dockerImageName: 'falkordb/falkordb',
    dockerImageVersionArgument: 'falkordb-version'
});

export const GLOBAL = {
    SERVERS: {
        OPEN: {
            serverArguments: ['--loadmodule /usr/lib/redis/modules/redisgraph.so'],
            clientOptions: {
                modules: {
                    graph: RedisGraph
                }
            }
        }
    }
};
