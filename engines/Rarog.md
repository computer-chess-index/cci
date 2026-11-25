# Engine: Rarog

Author: Miloslav Macůrek

Home: https://github.com/maelic13/rarog

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7.0 | 2026-11-13 | 2981<sub>(+6) | 3275<sub>(-6) | 3386<sub>(+12) |  |
| 2.6.0 | 2026-10-22 | 2975<sub>(+117) | 3281<sub>(+137) | 3374<sub>(+120) |  |
| 2.5.0 | 2026-10-05 | 2858<sub>(+355) | 3144<sub>(+266) | 3254<sub>(+233) |  |
| 2.4.0 | 2026-09-11 | 2503 | 2878 | 3021 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7.0 | 2026-11-13 | 2947<sub>(-118) | 3305<sub>(+68) | 3344<sub>(+5) |  |
| 2.6.0 | 2026-10-22 | 3065<sub>(+210) | 3237<sub>(+79) | 3339<sub>(+85) |  |
| 2.5.0 | 2026-10-05 | 2855<sub>(+298) | 3158<sub>(+230) | 3254<sub>(+275) |  |
| 2.4.0 | 2026-09-11 | 2557 | 2928 | 2979 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.4.0 | 2026-09-11 | 2614 | 2930 | 3015 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Rarog+<version>&body=###%20Engine%20name%0ARarog%0A%0A###%20Version%0A2.4.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-25 05:42:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0", "2.7.0"]
  y-axis "Elo Rating" 2500 --> 3400
  line "E1: STC (8.0+0.08s)" [2503, 2858, 2975, 2981]
  line "E1: LTC (60.0+0.60s)" [2878, 3144, 3281, 3275]
  line "E1: VLTC (2m24s+1.12s)" [3021, 3254, 3374, 3386]
  line "P1: STC (8.0+0.08s)" [2557, 2855, 3065, 2947]
  line "P1: LTC (60.0+0.60s)" [2928, 3158, 3237, 3305]
  line "P1: VLTC (2m24s+1.12s)" [2979, 3254, 3339, 3344]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3386 | 38 | 178 | 51% | 3383 | 64% |
|  |  | P1 | 3344 | 38 | 184 | 52% | 3328 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3275 | 36 | 216 | 49% | 3282 | 56% |
|  |  | P1 | 3305 | 45 | 128 | 51% | 3301 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2947 | 41 | 190 | 54% | 2913 | 37% |
|  |  | E1 | 2981 | 30 | 334 | 53% | 2952 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3339 | 36 | 204 | 50% | 3337 | 62% |
|  |  | E1 | 3374 | 28 | 346 | 49% | 3383 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3237 | 33 | 258 | 52% | 3220 | 53% |
|  |  | E1 | 3281 | 29 | 336 | 51% | 3274 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3065 | 40 | 192 | 50% | 3066 | 42% |
|  |  | E1 | 2975 | 31 | 324 | 50% | 2975 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3254 | 36 | 206 | 53% | 3232 | 61% |
|  |  | E1 | 3254 | 29 | 320 | 53% | 3229 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3144 | 32 | 280 | 54% | 3117 | 55% |
|  |  | P1 | 3158 | 35 | 238 | 47% | 3181 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2858 | 32 | 320 | 55% | 2813 | 38% |
|  |  | P1 | 2855 | 43 | 170 | 50% | 2859 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3015 | 35 | 256 | 53% | 2984 | 40% |
|  |  | P1 | 2979 | 39 | 198 | 51% | 2971 | 42% |
|  |  | E1 | 3021 | 29 | 367 | 52% | 3011 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2930 | 33 | 292 | 57% | 2861 | 38% |
|  |  | P1 | 2928 | 42 | 168 | 53% | 2894 | 43% |
|  |  | E1 | 2878 | 32 | 310 | 47% | 2909 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2614 | 36 | 266 | 52% | 2564 | 29% |
|  |  | P1 | 2557 | 46 | 156 | 46% | 2593 | 31% |
|  |  | E1 | 2503 | 36 | 252 | 41% | 2596 | 33% |