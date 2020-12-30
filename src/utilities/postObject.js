export const postObject =
{
    "RequestObjects": [
        {
            "Post": {
                "OperationType": "Read",
                "Privacy": {
                    "SearchValues": ["Public"],
                    "Return": true
                },
                "UserId": {
                    "SearchValues": ["assign"],
                    "Return": false
                },
                "id": {
                    "Return": true
                },

                "IsCalendarEntry": {
                    "SearchValues": [true],
                    "Return": true
                },
                "Images": {
                    "Return": true
                },
                "Text": {
                    "Return": true
                },
                "Rating": {
                    "Return": true
                },
                "TypeOfDay": {
                    "Return": true
                },
                // Don't change anything above ^^		

                //editable variables start below //                               


                "MaxItemCount": "5", // you can ask between 1 to 25 posts (max) at a time.                

                "CalendarDateTime": { // Date Time of a particular post
                    "Return": true, // please note: there can be multiple posts on a single day
                    "Sort": "Descending" // you can sort fetched dates by ascending/descending.
                },

                // Think of this as a pagination variable. In your response, you'll receive a continuationToken 
                // that you could send to fetch the subsequent posts.
                "ContinuationToken": null
            }
        }
    ]
}