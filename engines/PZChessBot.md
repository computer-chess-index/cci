# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.1 | 2026-06-27 | 3329<sub>(+24) | 3528<sub>(+34) | 3542<sub>(+2) |  |
| 7.0 | 2026-05-07 | 3305<sub>(+97) | 3494<sub>(+62) | 3540<sub>(+53) |  |
| 6.1 | 2026-02-01 | 3208<sub>(+33) | 3432<sub>(+62) | 3487<sub>(+57) |  |
| 6.0 | 2026-01-01 | 3175<sub>(+121) | 3370<sub>(+125) | 3430<sub>(+154) |  |
| 5.0 | 2025-10-19 | 3054 | 3245 | 3276 |  |
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

Generated: 2026-09-25 04:41:32

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0", "7.1"]
  y-axis "Elo Rating" 3000 --> 3600
  line "" [3054, 3175, 3208, 3305, 3329]
  line "STC (8.0+0.08s)" [3054, 3175, 3208, 3305, 3329]
  line "LTC (60.0+0.60s)" [3245, 3370, 3432, 3494, 3528]
  line "" [3276, 3430, 3487, 3540, 3542]
  line "VLTC (2m24s+1.12s)" [3276, 3430, 3487, 3540, 3542]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3542 | 31 | 242 | 51% | 3536 | 85% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3528 | 29 | 276 | 50% | 3529 | 84% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3329 | 26 | 358 | 50% | 3329 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3540 | 25 | 362 | 50% | 3540 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3494 | 25 | 388 | 51% | 3487 | 84% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3305 | 28 | 340 | 50% | 3305 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3487 | 21 | 520 | 50% | 3486 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3432 | 23 | 464 | 50% | 3430 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3208 | 25 | 456 | 51% | 3200 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3430 | 28 | 312 | 50% | 3426 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3370 | 31 | 268 | 50% | 3370 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3175 | 32 | 264 | 49% | 3182 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3276 | 32 | 254 | 50% | 3267 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3245 | 38 | 184 | 53% | 3200 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3054 | 35 | 236 | 55% | 2970 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |