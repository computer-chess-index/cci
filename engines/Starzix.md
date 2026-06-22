# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3317<sub>(+8) | 3471<sub>(+3) | 3495<sub>(-2) |  |
| 6.0 | 2024-10-24 | 3309<sub>(+112) | 3468<sub>(+74) | 3497<sub>(+79) |  |
| 5.0 | 2024-05-23 | 3197<sub>(+new) | 3394<sub>(+new) | 3418<sub>(+new) |  |
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

Generated: 2026-06-22 06:29:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3197, 3309, 3317]
  line "STC (8.0+0.08s)" [3197, 3309, 3317]
  line "LTC (60.0+0.60s)" [3394, 3468, 3471]
  line "VLTC (2m24s+1.12s)" [3418, 3497, 3495]
  line "VLTC (2m24s+1.12s)" [3418, 3497, 3495]
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
  line "STC (8.0+0.08s)" [3197, 3309, 3317]
  line "STC (8.0+0.08s)" [3197, 3309, 3317]
  line "LTC (60.0+0.60s)" [3394, 3468, 3471]
  line "VLTC (2m24s+1.12s)" [3418, 3497, 3495]
  line "VLTC (2m24s+1.12s)" [3418, 3497, 3495]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3495 | 25 | 356 | 50% | 3497 | 88% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3471 | 25 | 372 | 49% | 3475 | 88% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3317 | 22 | 506 | 50% | 3318 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3497 | 12 | 1620 | 50% | 3497 | 85% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3468 | 12 | 1600 | 50% | 3467 | 82% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3309 | 13 | 1628 | 50% | 3310 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3418 | 32 | 236 | 51% | 3414 | 76% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3394 | 32 | 240 | 48% | 3405 | 78% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3197 | 27 | 408 | 53% | 3112 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |