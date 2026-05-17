# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-07 | 3344<sub>(+92) | 3530<sub>(+58) | 3584<sub>(+56) |  |
| 6.1 | 2026-02-01 | 3252<sub>(+32) | 3472<sub>(+62) | 3528<sub>(+56) |  |
| 6.0 | 2026-01-01 | 3220<sub>(+120) | 3410<sub>(+120) | 3472<sub>(+152) |  |
| 5.0 | 2025-10-19 | 3100<sub>(+new) | 3290<sub>(+new) | 3320<sub>(+new) |  |
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

Generated: 2026-05-17 06:27:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "STC (8.0+0.08s)" [3100, 3220, 3252, 3344]
  line "STC (8.0+0.08s)" [3100, 3220, 3252, 3344]
  line "LTC (60.0+0.60s)" [3290, 3410, 3472, 3530]
  line "VLTC (2m24s+1.12s)" [3320, 3472, 3528, 3584]
  line "VLTC (2m24s+1.12s)" [3320, 3472, 3528, 3584]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3584 | 29 | 274 | 50% | 3583 | 86% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3530 | 27 | 312 | 51% | 3524 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3344 | 30 | 284 | 49% | 3349 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3528 | 21 | 520 | 50% | 3526 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3472 | 23 | 464 | 50% | 3471 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3252 | 25 | 456 | 51% | 3244 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3472 | 28 | 312 | 50% | 3467 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3410 | 31 | 268 | 50% | 3410 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3220 | 32 | 264 | 49% | 3228 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3320 | 32 | 254 | 50% | 3309 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3290 | 38 | 184 | 53% | 3244 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3100 | 35 | 236 | 55% | 3016 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |