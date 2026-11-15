# Engine: Trebuchet

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/zenith

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 2947<sub>(-24) | 3239<sub>(-8) | 3356<sub>(-8) |  |
| 1.0.0 | 2026-11-07 | 2971<sub>(-6) | 3247<sub>(-19) | 3364<sub>(+24) |  |
| 3.0.0 | 2026-10-30 | 2977<sub>(+11) | 3266<sub>(-20) | 3340<sub>(-47) |  |
| 2.0.0 | 2026-10-15 | 2966<sub>(+170) | 3286<sub>(+209) | 3387<sub>(+148) |  |
| 1.2.198 | 2026-08-01 | 2796 | 3077 | 3239 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 2950<sub>(-12) | 3272<sub>(+25) | 3329<sub>(+42) |  |
| 1.0.0 | 2026-11-07 | 2962<sub>(-3) | 3247<sub>(+20) | 3287<sub>(-2) |  |
| 3.0.0 | 2026-10-30 | 2965<sub>(+41) | 3227<sub>(-28) | 3289<sub>(-28) |  |
| 2.0.0 | 2026-10-15 | 2924<sub>(+205) | 3255<sub>(+168) | 3317<sub>(+80) |  |
| 1.2.198 | 2026-08-01 | 2719 | 3087 | 3237 |  |
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

Generated: 2026-11-15 05:43:51

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.198", "2.0.0", "3.0.0", "1.0.0", "1.1.0"]
  y-axis "Elo Rating" 2700 --> 3400
  line "E1: STC (8.0+0.08s)" [2796, 2966, 2977, 2971, 2947]
  line "E1: LTC (60.0+0.60s)" [3077, 3286, 3266, 3247, 3239]
  line "E1: VLTC (2m24s+1.12s)" [3239, 3387, 3340, 3364, 3356]
  line "P1: STC (8.0+0.08s)" [2719, 2924, 2965, 2962, 2950]
  line "P1: LTC (60.0+0.60s)" [3087, 3255, 3227, 3247, 3272]
  line "P1: VLTC (2m24s+1.12s)" [3237, 3317, 3289, 3287, 3329]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3329 | 39 | 166 | 48% | 3343 | 72% |
|  |  | E1 | 3356 | 33 | 232 | 49% | 3364 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3272 | 30 | 296 | 46% | 3301 | 66% |
|  |  | E1 | 3239 | 33 | 236 | 50% | 3236 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2950 | 42 | 156 | 46% | 2977 | 58% |
|  |  | E1 | 2947 | 33 | 266 | 50% | 2946 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3287 | 48 | 104 | 49% | 3294 | 75% |
|  |  | E1 | 3364 | 29 | 330 | 57% | 3098 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3247 | 50 | 100 | 52% | 3236 | 71% |
|  |  | E1 | 3247 | 31 | 272 | 48% | 3259 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2962 | 44 | 144 | 46% | 2990 | 51% |
|  |  | E1 | 2971 | 28 | 380 | 47% | 2998 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3289 | 38 | 168 | 51% | 3278 | 77% |
|  |  | E1 | 3340 | 31 | 264 | 51% | 3332 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3227 | 37 | 192 | 52% | 3208 | 62% |
|  |  | E1 | 3266 | 28 | 324 | 54% | 3237 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2965 | 42 | 148 | 48% | 2979 | 60% |
|  |  | E1 | 2977 | 37 | 218 | 50% | 2971 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3317 | 34 | 224 | 51% | 3308 | 70% |
|  |  | E1 | 3387 | 29 | 300 | 49% | 3391 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3255 | 39 | 174 | 53% | 3231 | 66% |
|  |  | E1 | 3286 | 32 | 266 | 52% | 3268 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2924 | 39 | 192 | 53% | 2893 | 44% |
|  |  | E1 | 2966 | 38 | 208 | 53% | 2935 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.198 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3387 | 31 | 272 | 51% | 3363 | 69% |
|  |  | P1 | 3237 | 33 | 252 | 44% | 3278 | 61% |
|  |  | E1 | 3239 | 29 | 326 | 41% | 3310 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3339 | 34 | 236 | 54% | 3266 | 64% |
|  |  | P1 | 3087 | 32 | 288 | 39% | 3173 | 55% |
|  |  | E1 | 3077 | 28 | 370 | 39% | 3168 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3067 | 26 | 424 | 47% | 3067 | 54% |
|  |  | P1 | 2719 | 45 | 180 | 59% | 2626 | 26% |
|  |  | E1 | 2796 | 34 | 308 | 64% | 2666 | 29% |