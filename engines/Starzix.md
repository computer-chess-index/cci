# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3316<sub>(+7) | 3475<sub>(+5) | 3495<sub>(-3) |  |
| 6.0 | 2024-10-24 | 3309<sub>(+112) | 3470<sub>(+76) | 3498<sub>(+78) |  |
| 5.0 | 2024-05-23 | 3197<sub>(+new) | 3394<sub>(+new) | 3420<sub>(+new) |  |
| 4.0 | 2024-01-22 |  |  |  |  |
| 3.0 | 2023-11-25 |  |  |  |  |
| 2.1 | 2023-10-22 |  |  |  |  |
| 1.0 | 2023-10-03 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Starzix+<version>&body=###%20Engine%20name%0AStarzix%0A%0A###%20Version%0A6.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:29:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3197, 3309, 3316]
  line "STC (8.0+0.08s)" [3197, 3309, 3316]
  line "LTC (60.0+0.60s)" [3394, 3470, 3475]
  line "VLTC (2m24s+1.12s)" [3420, 3498, 3495]
  line "VLTC (2m24s+1.12s)" [3420, 3498, 3495]
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
  x-axis ["5.0", "6.0", "6.1"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3197, 3309, 3316]
  line "STC (8.0+0.08s)" [3197, 3309, 3316]
  line "LTC (60.0+0.60s)" [3394, 3470, 3475]
  line "VLTC (2m24s+1.12s)" [3420, 3498, 3495]
  line "VLTC (2m24s+1.12s)" [3420, 3498, 3495]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3495 | 24 | 396 | 49% | 3498 | 88% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3475 | 24 | 396 | 50% | 3478 | 87% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3316 | 22 | 530 | 49% | 3320 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3498 | 12 | 1620 | 50% | 3498 | 85% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3470 | 12 | 1600 | 50% | 3468 | 82% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3309 | 13 | 1628 | 50% | 3312 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3420 | 32 | 236 | 51% | 3414 | 76% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3394 | 32 | 240 | 48% | 3406 | 78% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3197 | 27 | 408 | 53% | 3112 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |