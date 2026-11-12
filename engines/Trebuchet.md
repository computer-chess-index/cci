# Engine: Trebuchet

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/zenith

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 2990<sub>(-27) | 3294<sub>(-5) | 3414<sub>(-7) |  |
| 1.0.0 | 2026-11-07 | 3017<sub>(-7) | 3299<sub>(-22) | 3421<sub>(+24) |  |
| 3.0.0 | 2026-10-30 | 3024<sub>(+11) | 3321<sub>(-22) | 3397<sub>(-48) |  |
| 2.0.0 | 2026-10-15 | 3013<sub>(+173) | 3343<sub>(+214) | 3445<sub>(+150) |  |
| 1.2.198 | 2026-08-01 | 2840 | 3129 | 3295 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 3154<sub>(-19) | 3487<sub>(+26) | 3544<sub>(+39) |  |
| 1.0.0 | 2026-11-07 | 3173<sub>(+2) | 3461<sub>(+18) | 3505<sub>(+2) |  |
| 3.0.0 | 2026-10-30 | 3171<sub>(+47) | 3443<sub>(-27) | 3503<sub>(-29) |  |
| 2.0.0 | 2026-10-15 | 3124<sub>(+228) | 3470<sub>(+167) | 3532<sub>(+80) |  |
| 1.2.198 | 2026-08-01 | 2896 | 3303 | 3452 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.198 | 2026-08-01 | 3067 | 3339 | 3387 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Trebuchet+<version>&body=###%20Engine%20name%0ATrebuchet%0A%0A###%20Version%0A1.2.198" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:43:32

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.198", "2.0.0", "3.0.0", "1.0.0", "1.1.0"]
  y-axis "Elo Rating" 2800 --> 3600
  line "E1: STC (8.0+0.08s)" [2840, 3013, 3024, 3017, 2990]
  line "E1: LTC (60.0+0.60s)" [3129, 3343, 3321, 3299, 3294]
  line "E1: VLTC (2m24s+1.12s)" [3295, 3445, 3397, 3421, 3414]
  line "P1: STC (8.0+0.08s)" [2896, 3124, 3171, 3173, 3154]
  line "P1: LTC (60.0+0.60s)" [3303, 3470, 3443, 3461, 3487]
  line "P1: VLTC (2m24s+1.12s)" [3452, 3532, 3503, 3505, 3544]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3414 | 33 | 228 | 49% | 3422 | 68% |
|  |  | P1 | 3544 | 39 | 166 | 48% | 3559 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3294 | 33 | 232 | 50% | 3291 | 66% |
|  |  | P1 | 3487 | 30 | 296 | 46% | 3515 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3154 | 43 | 144 | 47% | 3175 | 58% |
|  |  | E1 | 2990 | 34 | 250 | 51% | 2982 | 46% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3505 | 49 | 100 | 50% | 3509 | 75% |
|  |  | E1 | 3421 | 29 | 322 | 57% | 3146 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3461 | 50 | 100 | 52% | 3452 | 71% |
|  |  | E1 | 3299 | 32 | 256 | 48% | 3316 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3173 | 47 | 128 | 47% | 3195 | 50% |
|  |  | E1 | 3017 | 29 | 360 | 46% | 3047 | 46% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3397 | 31 | 264 | 51% | 3390 | 69% |
|  |  | P1 | 3503 | 38 | 168 | 51% | 3492 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3443 | 37 | 192 | 52% | 3424 | 62% |
|  |  | E1 | 3321 | 28 | 324 | 54% | 3294 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3171 | 42 | 148 | 48% | 3186 | 60% |
|  |  | E1 | 3024 | 37 | 218 | 50% | 3019 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3532 | 34 | 224 | 51% | 3522 | 70% |
|  |  | E1 | 3445 | 29 | 300 | 49% | 3449 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3470 | 39 | 174 | 53% | 3447 | 66% |
|  |  | E1 | 3343 | 32 | 266 | 52% | 3325 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3124 | 40 | 192 | 53% | 3093 | 44% |
|  |  | E1 | 3013 | 38 | 208 | 53% | 2982 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.198 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3295 | 29 | 326 | 41% | 3368 | 62% |
|  |  | T1 | 3387 | 31 | 272 | 51% | 3363 | 69% |
|  |  | P1 | 3452 | 33 | 252 | 44% | 3492 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3129 | 28 | 370 | 39% | 3222 | 51% |
|  |  | T1 | 3339 | 34 | 236 | 54% | 3266 | 64% |
|  |  | P1 | 3303 | 32 | 288 | 39% | 3389 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2840 | 34 | 308 | 64% | 2711 | 29% |
|  |  | T1 | 3067 | 26 | 424 | 47% | 3067 | 54% |
|  |  | P1 | 2896 | 45 | 180 | 59% | 2803 | 26% |