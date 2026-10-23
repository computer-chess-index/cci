# Engine: Zenith

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/zenith

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-15 | 2990<sub>(+175) | 3320<sub>(+212) | 3421<sub>(+147) |  |
| 1.2.198 | 2026-08-01 | 2815 | 3108 | 3274 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-15 | 3065<sub>(+229) | 3401<sub>(+161) | 3464<sub>(+78) |  |
| 1.2.198 | 2026-08-01 | 2836 | 3240 | 3386 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.198 | 2026-08-01 | 3067 | 3339 | 3387 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zenith+<version>&body=###%20Engine%20name%0AZenith%0A%0A###%20Version%0A1.2.198" target="_blank">Submit new version</a>

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

Generated: 2026-10-23 04:45:03

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.198", "2.0.0"]
  y-axis "Elo Rating" 2800 --> 3500
  line "E1: STC (8.0+0.08s)" [2815, 2990]
  line "E1: LTC (60.0+0.60s)" [3108, 3320]
  line "E1: VLTC (2m24s+1.12s)" [3274, 3421]
  line "P1: STC (8.0+0.08s)" [2836, 3065]
  line "P1: LTC (60.0+0.60s)" [3240, 3401]
  line "P1: VLTC (2m24s+1.12s)" [3386, 3464]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3464 | 35 | 204 | 51% | 3456 | 70% |
|  |  | E1 | 3421 | 30 | 284 | 49% | 3426 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3401 | 40 | 158 | 53% | 3378 | 65% |
|  |  | E1 | 3320 | 34 | 234 | 53% | 3295 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3065 | 39 | 192 | 53% | 3032 | 44% |
|  |  | E1 | 2990 | 39 | 196 | 53% | 2955 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.198 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3387 | 31 | 272 | 51% | 3363 | 69% |
|  |  | P1 | 3386 | 33 | 252 | 44% | 3426 | 61% |
|  |  | E1 | 3274 | 29 | 326 | 41% | 3345 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3339 | 34 | 236 | 54% | 3266 | 64% |
|  |  | P1 | 3240 | 32 | 288 | 39% | 3325 | 55% |
|  |  | E1 | 3108 | 28 | 370 | 39% | 3201 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3067 | 26 | 424 | 47% | 3067 | 54% |
|  |  | P1 | 2836 | 45 | 180 | 59% | 2743 | 26% |
|  |  | E1 | 2815 | 34 | 308 | 64% | 2687 | 29% |