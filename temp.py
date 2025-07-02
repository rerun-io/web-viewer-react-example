# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "rerun-sdk",
# ]
# ///

import rerun as rr
import time

def main() -> None:
    rr.init("rerun_example_react_grpc")
    rr.serve_grpc()

    doc = """
    ### Hello from gRPC
    """

    rr.log("text", rr.TextDocument(doc))

    while True:
        time.sleep(1)


if __name__ == "__main__":
    main()
