# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.1 | 2026-06-27 | 3324<sub>(+26) | 3525<sub>(+39) | 3534<sub>(+1) |  |
| 7.0 | 2026-05-07 | 3298<sub>(+96) | 3486<sub>(+61) | 3533<sub>(+53) |  |
| 6.1 | 2026-02-01 | 3202<sub>(+34) | 3425<sub>(+62) | 3480<sub>(+56) |  |
| 6.0 | 2026-01-01 | 3168<sub>(+121) | 3363<sub>(+123) | 3424<sub>(+153) |  |
| 5.0 | 2025-10-19 | 3047 | 3240 | 3271 |  |
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

Generated: 2026-09-06 06:27:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0", "7.1"]
  y-axis "Elo Rating" 3000 --> 3600
  line "" [3047, 3168, 3202, 3298, 3324]
  line "STC (8.0+0.08s)" [3047, 3168, 3202, 3298, 3324]
  line "LTC (60.0+0.60s)" [3240, 3363, 3425, 3486, 3525]
  line "" [3271, 3424, 3480, 3533, 3534]
  line "VLTC (2m24s+1.12s)" [3271, 3424, 3480, 3533, 3534]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 31 | 234 | 51% | 3529 | 85% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3525 | 30 | 256 | 50% | 3522 | 84% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3324 | 27 | 338 | 50% | 3322 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3533 | 25 | 362 | 50% | 3533 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3486 | 25 | 388 | 51% | 3479 | 84% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3298 | 28 | 340 | 50% | 3298 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3480 | 21 | 520 | 50% | 3479 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3425 | 23 | 464 | 50% | 3424 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3202 | 25 | 456 | 51% | 3194 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3424 | 28 | 312 | 50% | 3420 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3363 | 31 | 268 | 50% | 3363 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3168 | 32 | 264 | 49% | 3177 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3271 | 32 | 254 | 50% | 3260 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3240 | 38 | 184 | 53% | 3194 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3047 | 35 | 236 | 55% | 2965 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |