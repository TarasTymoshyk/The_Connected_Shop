import { test, expect } from '@playwright/test';
 
let postId: number;
const title = 'Playwright API Post';
const content = 'Post created via Playwright API test';

test.describe.serial('WordPress Posts CRUD API', () => {
 
  test.beforeAll(async ({ request }) => {
    // Створюємо пост один раз перед усіма тестами
    const response = await request.post('/wp-json/wp/v2/posts', {
      data: {
        title: title,
        content: content,
        status: 'publish'
      }
    });
 
    const body = await response.json();
    postId = body.id;
  });

  test('CREATE post', async ({ request }) => {
    const response = await request.post('/wp-json/wp/v2/posts', {
      data: {
        title: title,
        content: content,
        status: 'publish'
      }
    });
 
    expect(response.status()).toBe(201);
 
    const body = await response.json();
    expect(body.id).toBeDefined();
    expect(body.title.rendered).toContain(title);
    expect(body.content.rendered).toContain(content);
  });
 
  test('READ post', async ({ request }) => {
    const response = await request.get(
      `/wp-json/wp/v2/posts/${postId}`
    );
 
    expect(response.status()).toBe(200); // ✅ Виправлено
 
    const body = await response.json();
    expect(body.id).toBe(postId);
    expect(body.status).toBe('publish');
  });
 
  test('UPDATE post', async ({ request }) => {
    const response = await request.put(
      `/wp-json/wp/v2/posts/${postId}`,
      {
        data: {
          title: 'Updated Playwright Title'
        }
      }
    );
 
    expect(response.status()).toBe(200);
 
    const body = await response.json();
    expect(body.title.rendered).toContain('Updated');
  });
 
  test('DELETE post', async ({ request }) => {
    const response = await request.delete(
      `/wp-json/wp/v2/posts/${postId}`,
      {
        params: {
          force: true
        }
      }
    );
 
    expect(response.status()).toBe(200);
 
    const body = await response.json();
    expect(body.deleted).toBeTruthy();
  });

  test('READ post again', async ({ request }) => {
    const response = await request.get(
      `/wp-json/wp/v2/posts/${postId}`
    );
 
    expect(response.status()).toBe(404); // ✅ Виправлено
  });

//   test.afterAll(async ({ request }) => {
//     // Очищення: видаляємо пост після всіх тестів
//     if (postId) {
//       await request.delete(`/wp-json/wp/v2/posts/${postId}`, {
//         params: { force: true }
//       });
//     }
//   });
 
});