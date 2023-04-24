import { createClient } from '@supabase/supabase-js';
const supabase = createClient(`${process.env.SUPABASE_URL}`, `${process.env.SUPABASE_KEY}`);
import lodash from 'lodash';

export default eventHandler(async (event) => {
  const query = getQuery(event);

  /*Dynamic query string formation (start) */
  var query_string = [];
  lodash.forEach(query, function (value, key) {
    query_string.push(key + "=" + value)
  });

  /*(end) */

  const data = await $fetch(`${process.env.SUPABASE_URL}/rest/v1/properties?${lodash.join(query_string, '&')}`, {
    method: 'get',
    headers: {
      apikey: `${process.env.SUPABASE_KEY}`,
    },
  });
  return data;
});
