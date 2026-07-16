# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.1 | 2026-06-27 | 3306<sub>(+25) | 3503<sub>(+35) | 3513<sub>(-2) |  |
| 7.0 | 2026-05-07 | 3281<sub>(+95) | 3468<sub>(+61) | 3515<sub>(+52) |  |
| 6.1 | 2026-02-01 | 3186<sub>(+32) | 3407<sub>(+62) | 3463<sub>(+57) |  |
| 6.0 | 2026-01-01 | 3154<sub>(+121) | 3345<sub>(+121) | 3406<sub>(+152) |  |
| 5.0 | 2025-10-19 | 3033<sub>(+new) | 3224<sub>(+new) | 3254<sub>(+new) |  |
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

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PZChessBot+<version>&body=###%20Engine%20name%0APZChessBot%0A%0A###%20Version%0A7.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:27:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0", "7.1"]
  y-axis "Elo Rating" 3000 --> 3600
  line "STC (8.0+0.08s)" [3033, 3154, 3186, 3281, 3306]
  line "STC (8.0+0.08s)" [3033, 3154, 3186, 3281, 3306]
  line "LTC (60.0+0.60s)" [3224, 3345, 3407, 3468, 3503]
  line "VLTC (2m24s+1.12s)" [3254, 3406, 3463, 3515, 3513]
  line "VLTC (2m24s+1.12s)" [3254, 3406, 3463, 3515, 3513]
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
  x-axis ["5.0", "6.0", "6.1", "7.0", "7.1"]
  y-axis "Elo Rating" 3000 --> 3600
  line "STC (8.0+0.08s)" [3033, 3154, 3186, 3281, 3306]
  line "STC (8.0+0.08s)" [3033, 3154, 3186, 3281, 3306]
  line "LTC (60.0+0.60s)" [3224, 3345, 3407, 3468, 3503]
  line "VLTC (2m24s+1.12s)" [3254, 3406, 3463, 3515, 3513]
  line "VLTC (2m24s+1.12s)" [3254, 3406, 3463, 3515, 3513]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 38 | 162 | 50% | 3511 | 85% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3503 | 37 | 168 | 50% | 3503 | 87% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3306 | 36 | 190 | 49% | 3313 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3515 | 25 | 362 | 50% | 3515 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3468 | 25 | 388 | 51% | 3461 | 84% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3281 | 28 | 340 | 50% | 3282 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3463 | 21 | 520 | 50% | 3461 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3407 | 23 | 464 | 50% | 3406 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3186 | 25 | 456 | 51% | 3178 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3406 | 28 | 312 | 50% | 3402 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3345 | 31 | 268 | 50% | 3345 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3154 | 32 | 264 | 49% | 3162 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3254 | 32 | 254 | 50% | 3244 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3224 | 38 | 184 | 53% | 3178 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3033 | 35 | 236 | 55% | 2950 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |