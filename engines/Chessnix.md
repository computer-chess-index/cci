# Engine: Chessnix

Author: Langedijk Eric

Home: https://github.com/ericlangedijk/chessnix/

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-28 | 2867<sub>(+new) | 3128<sub>(+new) | 3220<sub>(+new) |  |
| 0.0 | 2026-02-25 |  |  |  |  |
| 1.3 | 2026-02-15 | 2857<sub>(+257) | 3054<sub>(+289) | 3155<sub>(+224) |  |
| 1.2 | 2025-12-12 | 2600<sub>(+285) | 2765<sub>(+174) | 2931<sub>(+263) |  |
| 1.0 | 2025-11-08 | 2315<sub>(+new) | 2591<sub>(+new) | 2668<sub>(+new) | too many irregular games |
| 0.1 | 2025-10-03 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chessnix+<version>&body=###%20Engine%20name%0AChessnix%0A%0A###%20Version%0A1.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-07 06:23:48

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3", "1.4"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2315, 2600, 2857, 2867]
  line "STC (8.0+0.08s)" [2315, 2600, 2857, 2867]
  line "LTC (60.0+0.60s)" [2591, 2765, 3054, 3128]
  line "VLTC (2m24s+1.12s)" [2668, 2931, 3155, 3220]
  line "VLTC (2m24s+1.12s)" [2668, 2931, 3155, 3220]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3", "1.4"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2315, 2600, 2857, 2867]
  line "STC (8.0+0.08s)" [2315, 2600, 2857, 2867]
  line "LTC (60.0+0.60s)" [2591, 2765, 3054, 3128]
  line "VLTC (2m24s+1.12s)" [2668, 2931, 3155, 3220]
  line "VLTC (2m24s+1.12s)" [2668, 2931, 3155, 3220]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3220 | 41 | 160 | 53% | 3201 | 56% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 3128 | 43 | 164 | 51% | 3119 | 43% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2867 | 44 | 156 | 49% | 2878 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3155 | 100 | 26 | 56% | 3112 | 58% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3054 | 75 | 52 | 46% | 3078 | 46% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2857 | 123 | 22 | 52% | 2834 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2931 | 158 | 12 | 46% | 2967 | 25% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2765 | 79 | 52 | 52% | 2747 | 31% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2600 | 150 | 16 | 63% | 2480 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2668 | 100 | 32 | 33% | 2811 | 41% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2591 | 145 | 16 | 41% | 2677 | 19% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2315 | 71 | 70 | 41% | 2391 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |