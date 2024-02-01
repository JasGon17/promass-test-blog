export const getDataBlog = async () => {
    const url = 'https://x8ki-letl-twmt.n7.xano.io/api:viZu1Sdl/blog_promass';
  
    try {
      const response = await fetch(url, { cache: 'no-store' });
  
      if (!response.ok) {
        return 400
      }

      const data = await response.json();
      return data

    } catch (error) {
      return 400
    }
};

export const postBlog = async (data) => {
  const url = 'https://x8ki-letl-twmt.n7.xano.io/api:viZu1Sdl/blog_promass';
  const params = {
    title: data.title,
    author: data.author,
    content: data.content
  };
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    if (!response.ok) {
      return 400
    }
    return 200;
  } catch (error) {
    return 400
  }
};