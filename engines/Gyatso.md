# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-06-05 | 2685<sub>(+206) | 3019<sub>(+214) | 3100<sub>(+192) |  |
| 1.3.0 | 2026-03-30 | 2479<sub>(+366) | 2805<sub>(+382) | 2908<sub>(+400) |  |
| 1.2.0 | 2026-01-24 | 2113<sub>(+162) | 2423<sub>(+121) | 2508<sub>(+117) |  |
| 1.1.0 | 2026-01-09 | 1951<sub>(+new) | 2302<sub>(+new) | 2391<sub>(+new) |  |
| 1.0.0 | 2025-12-10 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gyatso+<version>&body=###%20Engine%20name%0AGyatso%0A%0A###%20Version%0A1.4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:25:06

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "1.2.0", "1.3.0", "1.4.0"]
  y-axis "Elo Rating" 1900 --> 3100
  line "STC (8.0+0.08s)" [1951, 2113, 2479, 2685]
  line "STC (8.0+0.08s)" [1951, 2113, 2479, 2685]
  line "LTC (60.0+0.60s)" [2302, 2423, 2805, 3019]
  line "VLTC (2m24s+1.12s)" [2391, 2508, 2908, 3100]
  line "VLTC (2m24s+1.12s)" [2391, 2508, 2908, 3100]
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
  x-axis ["1.1.0", "1.2.0", "1.3.0", "1.4.0"]
  y-axis "Elo Rating" 1900 --> 3100
  line "STC (8.0+0.08s)" [1951, 2113, 2479, 2685]
  line "STC (8.0+0.08s)" [1951, 2113, 2479, 2685]
  line "LTC (60.0+0.60s)" [2302, 2423, 2805, 3019]
  line "VLTC (2m24s+1.12s)" [2391, 2508, 2908, 3100]
  line "VLTC (2m24s+1.12s)" [2391, 2508, 2908, 3100]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3100 | 33 | 272 | 50% | 3098 | 49% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3019 | 32 | 292 | 52% | 3006 | 45% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2685 | 32 | 312 | 50% | 2689 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2908 | 25 | 492 | 47% | 2931 | 39% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2805 | 30 | 358 | 50% | 2799 | 39% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2479 | 25 | 576 | 43% | 2539 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2508 | 33 | 312 | 52% | 2488 | 24% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2423 | 35 | 274 | 51% | 2411 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2113 | 33 | 328 | 52% | 2095 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2391 | 45 | 172 | 49% | 2406 | 23% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2302 | 43 | 208 | 50% | 2302 | 16% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1951 | 49 | 148 | 49% | 1966 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |