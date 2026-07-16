# Engine: Arasan

Author: Jon Dart

Home: https://github.com/jdart1/arasan-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.4 | 2026-04-15 | 3222<sub>(-6) | 3421<sub>(+7) | 3475<sub>(+18) |  |
| 25.3 | 2025-12-28 | 3228<sub>(+new) | 3414<sub>(+new) | 3457<sub>(+new) |  |
| 25.2 | 2025-07-15 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arasan+<version>&body=###%20Engine%20name%0AArasan%0A%0A###%20Version%0A25.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:22:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.3", "25.4"]
  y-axis "Elo Rating" 3200 --> 3500
  line "STC (8.0+0.08s)" [3228, 3222]
  line "STC (8.0+0.08s)" [3228, 3222]
  line "LTC (60.0+0.60s)" [3414, 3421]
  line "VLTC (2m24s+1.12s)" [3457, 3475]
  line "VLTC (2m24s+1.12s)" [3457, 3475]
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
  x-axis ["25.3", "25.4"]
  y-axis "Elo Rating" 3200 --> 3500
  line "STC (8.0+0.08s)" [3228, 3222]
  line "STC (8.0+0.08s)" [3228, 3222]
  line "LTC (60.0+0.60s)" [3414, 3421]
  line "VLTC (2m24s+1.12s)" [3457, 3475]
  line "VLTC (2m24s+1.12s)" [3457, 3475]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3475 | 24 | 396 | 50% | 3478 | 86% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3421 | 25 | 388 | 50% | 3422 | 79% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3222 | 25 | 442 | 51% | 3209 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3457 | 26 | 356 | 51% | 3452 | 82% |
| 25.3 | LTC <sub>(60.0+0.60s)</sub> | 3414 | 26 | 360 | 51% | 3407 | 78% |
| 25.3 | STC <sub>(8.0+0.08s)</sub> | 3228 | 24 | 488 | 52% | 3212 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |