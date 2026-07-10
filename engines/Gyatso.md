# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-06-05 | 2691<sub>(+207) | 3021<sub>(+213) | 3104<sub>(+193) |  |
| 1.3.0 | 2026-03-30 | 2484<sub>(+367) | 2808<sub>(+379) | 2911<sub>(+397) |  |
| 1.2.0 | 2026-01-24 | 2117<sub>(+164) | 2429<sub>(+123) | 2514<sub>(+119) |  |
| 1.1.0 | 2026-01-09 | 1953<sub>(+new) | 2306<sub>(+new) | 2395<sub>(+new) |  |
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

Generated: 2026-07-10 06:26:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "1.2.0", "1.3.0", "1.4.0"]
  y-axis "Elo Rating" 1900 --> 3200
  line "STC (8.0+0.08s)" [1953, 2117, 2484, 2691]
  line "STC (8.0+0.08s)" [1953, 2117, 2484, 2691]
  line "LTC (60.0+0.60s)" [2306, 2429, 2808, 3021]
  line "VLTC (2m24s+1.12s)" [2395, 2514, 2911, 3104]
  line "VLTC (2m24s+1.12s)" [2395, 2514, 2911, 3104]
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
  y-axis "Elo Rating" 1900 --> 3200
  line "STC (8.0+0.08s)" [1953, 2117, 2484, 2691]
  line "STC (8.0+0.08s)" [1953, 2117, 2484, 2691]
  line "LTC (60.0+0.60s)" [2306, 2429, 2808, 3021]
  line "VLTC (2m24s+1.12s)" [2395, 2514, 2911, 3104]
  line "VLTC (2m24s+1.12s)" [2395, 2514, 2911, 3104]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3104 | 33 | 260 | 50% | 3102 | 49% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3021 | 32 | 284 | 51% | 3009 | 45% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2691 | 33 | 292 | 50% | 2693 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2911 | 25 | 492 | 47% | 2934 | 39% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2808 | 30 | 358 | 50% | 2803 | 39% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2484 | 25 | 576 | 43% | 2543 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2514 | 33 | 312 | 52% | 2492 | 24% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2429 | 35 | 274 | 51% | 2415 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2117 | 33 | 328 | 52% | 2098 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2395 | 45 | 172 | 49% | 2410 | 23% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2306 | 43 | 208 | 50% | 2306 | 16% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1953 | 49 | 148 | 49% | 1970 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |