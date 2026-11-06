# Engine: Zenith

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/zenith

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-10-30 | 3048<sub>(+10) | 3347<sub>(-23) | 3424<sub>(-47) |  |
| 2.0.0 | 2026-10-15 | 3038<sub>(+172) | 3370<sub>(+212) | 3471<sub>(+149) |  |
| 1.2.198 | 2026-08-01 | 2866 | 3158 | 3322 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-10-30 | 3218<sub>(+55) | 3476<sub>(-27) | 3537<sub>(-28) |  |
| 2.0.0 | 2026-10-15 | 3163<sub>(+232) | 3503<sub>(+164) | 3565<sub>(+79) |  |
| 1.2.198 | 2026-08-01 | 2931 | 3339 | 3486 |  |
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

Generated: 2026-11-06 05:44:13

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.198", "2.0.0", "3.0.0"]
  y-axis "Elo Rating" 2800 --> 3600
  line "E1: STC (8.0+0.08s)" [2866, 3038, 3048]
  line "E1: LTC (60.0+0.60s)" [3158, 3370, 3347]
  line "E1: VLTC (2m24s+1.12s)" [3322, 3471, 3424]
  line "P1: STC (8.0+0.08s)" [2931, 3163, 3218]
  line "P1: LTC (60.0+0.60s)" [3339, 3503, 3476]
  line "P1: VLTC (2m24s+1.12s)" [3486, 3565, 3537]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3424 | 31 | 264 | 51% | 3416 | 69% |
|  |  | P1 | 3537 | 38 | 168 | 51% | 3526 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3347 | 29 | 316 | 53% | 3320 | 63% |
|  |  | P1 | 3476 | 38 | 184 | 52% | 3456 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3048 | 38 | 206 | 50% | 3044 | 42% |
|  |  | P1 | 3218 | 44 | 136 | 49% | 3227 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3565 | 34 | 224 | 51% | 3556 | 70% |
|  |  | E1 | 3471 | 29 | 300 | 49% | 3476 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3503 | 39 | 174 | 53% | 3479 | 66% |
|  |  | E1 | 3370 | 32 | 266 | 52% | 3352 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3163 | 40 | 192 | 53% | 3131 | 44% |
|  |  | E1 | 3038 | 38 | 208 | 53% | 3008 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.198 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3486 | 33 | 252 | 44% | 3526 | 61% |
|  |  | E1 | 3322 | 29 | 326 | 41% | 3394 | 62% |
|  |  | T1 | 3387 | 31 | 272 | 51% | 3363 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3339 | 32 | 288 | 39% | 3424 | 55% |
|  |  | E1 | 3158 | 28 | 370 | 39% | 3249 | 51% |
|  |  | T1 | 3339 | 34 | 236 | 54% | 3266 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2866 | 34 | 308 | 64% | 2736 | 29% |
|  |  | T1 | 3067 | 26 | 424 | 47% | 3067 | 54% |
|  |  | P1 | 2931 | 45 | 180 | 59% | 2838 | 26% |