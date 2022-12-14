import { mount } from "@vue/test-utils";
import Dialog from "./Dialog.vue";
import { describe, it, expect } from "vitest";

import { createTestingPinia } from "@pinia/testing";

const getWrapper = () =>
  mount(Dialog, {
    global: {
      plugins: [createTestingPinia()],
    },
  });

describe("Component: Dialog", () => {
  const wrapper = getWrapper();

  it("Renders the component", () => {
    expect(wrapper.find('[data-testid="wrapper"]').exists()).toBeTruthy();
  });
});
