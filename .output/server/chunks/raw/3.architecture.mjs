// ROLLUP_NO_REPLACE 
 const _3_architecture = "{\"parsed\":{\"_path\":\"/docs/architecture\",\"_dir\":\"docs\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"_empty\":false,\"title\":\"Architecture\",\"description\":\"Templr Architecture and design\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"img\",\"props\":{\"alt\":\"Templr Architecture\",\"src\":\"/docs/zytes.v8.isolates.png\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"The architecture and design of \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"zytes\"}]},{\"type\":\"text\",\"value\":\" is based on time-tested \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"database driven design\"}]},{\"type\":\"text\",\"value\":\" coupled with modern front-end stacks that can be deployed cross platform in a hybrid infrastructure i.e. cloud and or on-prem in a serverless model without using any \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Virtual Machines\"}]},{\"type\":\"text\",\"value\":\" or \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"AWS Lambda\"}]},{\"type\":\"text\",\"value\":\" or \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Azure Function\"}]},{\"type\":\"text\",\"value\":\" by leveraging \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Chrome V8\"}]},{\"type\":\"text\",\"value\":\" runtimes a.k.a \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Javascript Isolate\"}]},{\"type\":\"text\",\"value\":\" or \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Ilands Architecture\"}]},{\"type\":\"text\",\"value\":\". The programming language is \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Javascript (EC6)\"}]},{\"type\":\"text\",\"value\":\", the most widely used language in the universe.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"V8 Isolates Architecture\"}]},{\"type\":\"text\",\"value\":\" (Image courtesy \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://blog.cloudflare.com/cloud-computing-without-containers/\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"cloudflare worker\"}]},{\"type\":\"text\",\"value\":\")\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"img\",\"props\":{\"alt\":\"V8 Isolates\",\"src\":\"/docs/v8.isolates.png\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"The popular V8 runtime that \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"zytes\"}]},{\"type\":\"text\",\"value\":\" can be deployed on the edge nodes are:\"}]},{\"type\":\"element\",\"tag\":\"list\",\"props\":{\"type\":\"success\"},\"children\":[{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://deno.land/\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Denos\"}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://www.netlify.com/products/#netlify-edge-functions\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Netlify edge functions\"}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://vercel.com/\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Vercel functions\"}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://workers.cloudflare.com/\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Cloudflare workers\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Edge computing are best suited for static websites as the supported protocols between the client browser and the server is \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"HTTP(s)\"}]},{\"type\":\"text\",\"value\":\", inorder to build and deploy database driven applications on the edge, you need \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Data proxy\"}]},{\"type\":\"text\",\"value\":\" which sits inbetween the client browser and the database. The \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Supabase\"}]},{\"type\":\"text\",\"value\":\" cloud acts as \"},{\"type\":\"element\",\"tag\":\"code-inline\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Data Proxy\"}]},{\"type\":\"text\",\"value\":\" by offering out of the box \"},{\"type\":\"element\",\"tag\":\"em\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"REST\"}]},{\"type\":\"text\",\"value\":\" and \"},{\"type\":\"element\",\"tag\":\"em\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"GraphQL\"}]},{\"type\":\"text\",\"value\":\" APIs for the following database objects:\"}]},{\"type\":\"element\",\"tag\":\"list\",\"props\":{\"type\":\"success\"},\"children\":[{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Tables\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Viewes\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Functions\"}]}]}]},{\"type\":\"element\",\"tag\":\"hr\",\"props\":{},\"children\":[]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[]}},\"_type\":\"markdown\",\"_id\":\"content:docs:3.architecture.md\",\"_source\":\"content\",\"_file\":\"docs/3.architecture.md\",\"_extension\":\"md\"},\"hash\":\"tSYME5iUmP\"}";

export { _3_architecture as default };
