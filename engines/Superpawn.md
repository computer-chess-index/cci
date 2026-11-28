# Engine: Superpawn

Author: John Byrd

Home: https://github.com/johnwbyrd/superpawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3198<sub>(+196) | 3424<sub>(+114) | 3470<sub>(+91) |  |
| 1.9.1 | 2026-10-18 | 3002<sub>(+207) | 3310<sub>(+190) | 3379<sub>(+193) |  |
| 1.9.0 | 2026-10-16 | 2795 | 3120 | 3186 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3195<sub>(+149) | 3372<sub>(+73) | 3457<sub>(+116) |  |
| 1.9.1 | 2026-10-18 | 3046<sub>(+181) | 3299<sub>(+155) | 3341<sub>(+132) |  |
| 1.9.0 | 2026-10-16 | 2865 | 3144 | 3209 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.0 | 2026-10-16 | 2865 | 3144 | 3209 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Superpawn+<version>&body=###%20Engine%20name%0ASuperpawn%0A%0A###%20Version%0A1.9.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-28 05:43:44

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9.0", "1.9.1", "1.9.2"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2795, 3002, 3198]
  line "E1: LTC (60.0+0.60s)" [3120, 3310, 3424]
  line "E1: VLTC (2m24s+1.12s)" [3186, 3379, 3470]
  line "P1: STC (8.0+0.08s)" [2865, 3046, 3195]
  line "P1: LTC (60.0+0.60s)" [3144, 3299, 3372]
  line "P1: VLTC (2m24s+1.12s)" [3209, 3341, 3457]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3457 | 30 | 278 | 53% | 3434 | 76% |
|  |  | E1 | 3470 | 31 | 254 | 51% | 3464 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3372 | 41 | 144 | 51% | 3368 | 76% |
|  |  | E1 | 3424 | 26 | 382 | 53% | 3402 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3195 | 31 | 270 | 51% | 3183 | 61% |
|  |  | E1 | 3198 | 29 | 330 | 53% | 3179 | 58% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3341 | 35 | 210 | 52% | 3330 | 62% |
|  |  | E1 | 3379 | 28 | 346 | 51% | 3370 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3310 | 30 | 310 | 53% | 3290 | 56% |
|  |  | P1 | 3299 | 33 | 248 | 49% | 3306 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3002 | 28 | 412 | 53% | 2978 | 39% |
|  |  | P1 | 3046 | 40 | 180 | 50% | 3047 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3209 | 43 | 194 | 60% | 2977 | 39% |
|  |  | E1 | 3186 | 34 | 292 | 55% | 3032 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3144 | 50 | 150 | 62% | 2830 | 32% |
|  |  | E1 | 3120 | 42 | 214 | 62% | 2831 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2865 | 47 | 176 | 58% | 2645 | 26% |
|  |  | E1 | 2795 | 42 | 220 | 61% | 2543 | 26% |