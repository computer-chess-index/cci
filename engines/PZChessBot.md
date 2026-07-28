# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.1 | 2026-06-27 | 3309<sub>(+24) | 3510<sub>(+38) | 3522<sub>(+3) |  |
| 7.0 | 2026-05-07 | 3285<sub>(+95) | 3472<sub>(+61) | 3519<sub>(+52) |  |
| 6.1 | 2026-02-01 | 3190<sub>(+32) | 3411<sub>(+62) | 3467<sub>(+57) |  |
| 6.0 | 2026-01-01 | 3158<sub>(+122) | 3349<sub>(+122) | 3410<sub>(+152) |  |
| 5.0 | 2025-10-19 | 3036<sub>(+new) | 3227<sub>(+new) | 3258<sub>(+new) |  |
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

Generated: 2026-07-28 06:31:46

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0", "7.1"]
  y-axis "Elo Rating" 3000 --> 3600
  line "STC (8.0+0.08s)" [3036, 3158, 3190, 3285, 3309]
  line "STC (8.0+0.08s)" [3036, 3158, 3190, 3285, 3309]
  line "LTC (60.0+0.60s)" [3227, 3349, 3411, 3472, 3510]
  line "VLTC (2m24s+1.12s)" [3258, 3410, 3467, 3519, 3522]
  line "VLTC (2m24s+1.12s)" [3258, 3410, 3467, 3519, 3522]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3522 | 34 | 194 | 51% | 3517 | 86% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3510 | 33 | 208 | 50% | 3509 | 84% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3309 | 33 | 230 | 49% | 3314 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3519 | 25 | 362 | 50% | 3519 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3472 | 25 | 388 | 51% | 3465 | 84% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3285 | 28 | 340 | 50% | 3286 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3467 | 21 | 520 | 50% | 3465 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3411 | 23 | 464 | 50% | 3410 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3190 | 25 | 456 | 51% | 3182 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3410 | 28 | 312 | 50% | 3406 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3349 | 31 | 268 | 50% | 3349 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3158 | 32 | 264 | 49% | 3164 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3258 | 32 | 254 | 50% | 3247 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3227 | 38 | 184 | 53% | 3182 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3036 | 35 | 236 | 55% | 2952 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |