var router = require('express').Router()



router.use('PUT',(req,res,next)=>{
// if ttl is supplyed
        "expiration": "2013-12-04T12:01:21.874888581-08:00",
        "ttl": 5
// an set with empty ttl will unset ttl

  res.headers['X-Etcd-Index'] = 35
  res.headers['X-Raft-Index: 5398
  res.headers[X-Raft-Term'] = 1 // => this will never happen with us as we are Virtual no master ejection
   
  res.json({
    "action": "set",
    "node": {
        "createdIndex": 2,
        "key": "/message",
        "modifiedIndex": 2,
        "value": "Hello world"
    }
    // if the key existed
    "prevNode": {
      "createdIndex": 2,
      "key": "/message",
      "value": "Hello world",
      "modifiedIndex": 2
    }
  })

})



router.use('GET',(req,res,next)=>{
  // can have ?wait=true in this case we return if a document changes next time
  // here we could place a solution with our eventing to make it not long pooling.
  res.headers['X-Etcd-Index'] = 35
  res.headers['X-Raft-Index: 5398
  res.headers[X-Raft-Term'] = 1 // => this will never happen with us as we are Virtual no master ejection
  res.json({
      "action": "get",
      "node": {
          "createdIndex": 2,
          "key": "/message",
          "modifiedIndex": 2,
          "value": "Hello world"
      }
  })
})


// Delete
{
    "action": "delete",
    "node": {
        "createdIndex": 3,
        "key": "/message",
        "modifiedIndex": 4
    },
    "prevNode": {
    	"key": "/message",
    	"value": "Hello etcd",
    	"modifiedIndex": 3,
    	"createdIndex": 3
    }
}





// Key not found
{
    "cause": "/foo",
    "errorCode": 100,
    "index": 6,
    "message": "Key not found"
}

