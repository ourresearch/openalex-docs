import {
    createIntegration,
    createComponent,
    FetchEventCallback,
    RuntimeContext,
  } from "@gitbook/runtime";
  
  type IntegrationContext = {} & RuntimeContext;
  type IntegrationBlockProps = {};
  type IntegrationBlockState = { url: string };
  type IntegrationAction = { action: "@link.unfurl", url?: string };
  
  const handleFetchEvent: FetchEventCallback<IntegrationContext> = async (
    request,
    context
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { api } = context;
    const user = api.user.getAuthenticatedUser();
  
    return new Response(JSON.stringify(user));
  };
  
  const exampleBlock = createComponent<
     IntegrationBlockProps,
     IntegrationBlockState,
     IntegrationAction,
     IntegrationContext
  >({
    componentId: "test-integration",
    initialState: (props) => {
      return {
        url: "https://alpha.openalex.org",
      };
    },
    action: async (element, action, context) => {
      switch (action.action) {
        case "@link.unfurl":
          const { url } = action;
          console.log("@link.unfurl -- url: " + url);
          element.state.url = url;
          return {};
      }
    },
    render: async (element, context) => {
      return (
        <block>
          <webframe
            source={{ url: element.state.url }}
            aspectRatio={16 / 9}
          />
        </block>
      );
    },
  });
  
  export default createIntegration({
    fetch: handleFetchEvent,
    components: [exampleBlock],
    events: {},
  });
