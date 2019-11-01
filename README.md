# node-etcd-server
A Implamentation of the ETCD Api for Compatibility to Couchbase or the Filesystem via node-couchbase-server or later planned the filesystem direct (optinal)


##Why
I was always amazed by the fact that couchbase is better in performance then anything else and still fully scale able and easy to administrate but many software is using ETCD as its backend and that is not the right fit for large scale operations also my serverless platform project should be simple to scale and administrate so i want to replace everything in kubernetes with couchbase node-zookeeper-server is a similar project for zookeeper

and as a extra we have @direktspeed/node-couchbase-server that allows us to expose the couchbase-api as mockup version that supports additional backends like a filesystem ideal for development 

## Resources
- https://github.com/etcd-io/etcd/blob/master/Documentation/v2/api.md
- https://github.com/etcd-io/etcd/blob/master/Documentation/v2/api_v3.md
- https://github.com/etcd-io/etcd/blob/master/Documentation/v2/auth_api.md
