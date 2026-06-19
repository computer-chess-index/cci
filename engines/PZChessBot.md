# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-07 | 3279<sub>(+93) | 3465<sub>(+59) | 3515<sub>(+55) |  |
| 6.1 | 2026-02-01 | 3186<sub>(+32) | 3406<sub>(+62) | 3460<sub>(+55) |  |
| 6.0 | 2026-01-01 | 3154<sub>(+122) | 3344<sub>(+122) | 3405<sub>(+153) |  |
| 5.0 | 2025-10-19 | 3032<sub>(+new) | 3222<sub>(+new) | 3252<sub>(+new) |  |
| 4.0 | 2025-10-03 |  |  |  |  |
| 3.0 | 2025-07-02 |  |  |  |  |
| 2.0 | 2025-06-17 |  |  |  |  |
| 1.0 | 2025-04-20 |  |  |  |  |
| 20250318T22 | 2025-03-19 |  |  |  |  |
| 20250311T07 | 2025-03-11 |  |  |  |  |
| 20250307T21 | 2025-03-08 |  |  |  |  |
| 20250306T21 | 2025-03-07 |  |  |  |  |
| 20250302T22 | 2025-03-04 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PZChessBot+<version>&body=###%20Engine%20name%0APZChessBot%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-19 06:28:12

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0"]
  y-axis "Elo Rating" 3000 --> 3600
  line "STC (8.0+0.08s)" [3032, 3154, 3186, 3279]
  line "STC (8.0+0.08s)" [3032, 3154, 3186, 3279]
  line "LTC (60.0+0.60s)" [3222, 3344, 3406, 3465]
  line "VLTC (2m24s+1.12s)" [3252, 3405, 3460, 3515]
  line "VLTC (2m24s+1.12s)" [3252, 3405, 3460, 3515]
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
  x-axis ["5.0", "6.0", "6.1", "7.0"]
  y-axis "Elo Rating" 3000 --> 3600
  line "STC (8.0+0.08s)" [3032, 3154, 3186, 3279]
  line "STC (8.0+0.08s)" [3032, 3154, 3186, 3279]
  line "LTC (60.0+0.60s)" [3222, 3344, 3406, 3465]
  line "VLTC (2m24s+1.12s)" [3252, 3405, 3460, 3515]
  line "VLTC (2m24s+1.12s)" [3252, 3405, 3460, 3515]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3515 | 26 | 334 | 50% | 3513 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3465 | 25 | 376 | 51% | 3459 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3279 | 28 | 336 | 50% | 3281 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3460 | 21 | 520 | 50% | 3459 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3406 | 23 | 464 | 50% | 3405 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3186 | 25 | 456 | 51% | 3178 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3405 | 28 | 312 | 50% | 3401 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3344 | 31 | 268 | 50% | 3344 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3154 | 32 | 264 | 49% | 3160 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3252 | 32 | 254 | 50% | 3243 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3222 | 38 | 184 | 53% | 3178 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3032 | 35 | 236 | 55% | 2950 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |