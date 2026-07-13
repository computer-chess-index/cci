# Engine: Arasan

Author: Jon Dart

Home: https://github.com/jdart1/arasan-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.4 | 2026-04-15 | 3225<sub>(-8) | 3426<sub>(+8) | 3479<sub>(+16) |  |
| 25.3 | 2025-12-28 | 3233<sub>(+new) | 3418<sub>(+new) | 3463<sub>(+new) |  |
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

Generated: 2026-07-13 06:23:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.3", "25.4"]
  y-axis "Elo Rating" 3200 --> 3500
  line "STC (8.0+0.08s)" [3233, 3225]
  line "STC (8.0+0.08s)" [3233, 3225]
  line "LTC (60.0+0.60s)" [3418, 3426]
  line "VLTC (2m24s+1.12s)" [3463, 3479]
  line "VLTC (2m24s+1.12s)" [3463, 3479]
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
  line "STC (8.0+0.08s)" [3233, 3225]
  line "STC (8.0+0.08s)" [3233, 3225]
  line "LTC (60.0+0.60s)" [3418, 3426]
  line "VLTC (2m24s+1.12s)" [3463, 3479]
  line "VLTC (2m24s+1.12s)" [3463, 3479]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3479 | 24 | 392 | 50% | 3482 | 86% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3426 | 25 | 384 | 50% | 3426 | 78% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3225 | 25 | 430 | 51% | 3213 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3463 | 26 | 356 | 51% | 3457 | 82% |
| 25.3 | LTC <sub>(60.0+0.60s)</sub> | 3418 | 26 | 360 | 51% | 3411 | 78% |
| 25.3 | STC <sub>(8.0+0.08s)</sub> | 3233 | 24 | 488 | 52% | 3216 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |