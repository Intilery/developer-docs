---
id: commands
title: API Commands
sidebar_label: Commands
---

The **track action** on the API Event Endpoint will accept a number of **event** values that act as **commands** to trigger
the sending of a specific asset. In these cases there is no need to pass a separate properties section, as every value under
the root of the object forms the start of data for use as a merge tag in the campaign, though the properties of the 
customer are available as usual in the merge tags.

Each event must provide the `assetId` property to identify the asset code of the asset to be sent.

When the asset is sent, the current state of the **customer** is added by the Intilery CDP as a root merge tag,
so does not need to be passed in on the track event.

Note that you can only send to a **customer** who has been [identified](./api#identify-action) via the [HTTP API](/docs/apis/api)
or [identified](/docs/tag/reference#identify) via the [Analytics.js tag](/docs/tag/tag1)


## Commands

| **event**      | **action**                |
| :------------- | :------------------------ |
| **send_email** | send the specified email  |
| **send_sms**   | send the specified sms    |
| **send_print** | send the specified letter |

## Event Data

| **field**        | **required** | description              |
| ----------------- | ------------ | ------------------------------------------------------------ |
| **userId**        | **required** | Unique identifier for the user in your database              |
| **event**         | **required** | One of the commands listed above.                            |
| **assetId**       | **required** | The code of the Campaign (Asset)                             |
| **timestamp**     | **required** | [ISO-8601 UTC Timestamp](http://en.wikipedia.org/wiki/ISO_8601) (e.g. 2019-11-18T13:30:11.444Z) for then the event happened |
| `<anything else>` | optional     | Any valid JSON that is then available for use in the asset using merge tags |

## Example

```http request
POST https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/track
```

```json
{
	"userId": "ABC/123",  
	"event": "SEND_SMS",  
	"assetId": "202007-B-AbandonedBooking",  
	"timestamp": "2019-11-18T13:30:12.984Z",  
	"bookingId" : "1234" 
}
```

***Note:*** When looking at events or customers in the Intilery platform, you may see references to "customerId", this is the internal unique ID for the customer that Intilery assigns. This ID is for Intilery use only.