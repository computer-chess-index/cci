# Engine: Luminex

Author: Cheng Chang

Home: https://github.com/changcheng967/Luminex

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.5.1 | 2026-11-07 | 2615<sub>(+482) | 3024<sub>(+513) | 3159<sub>(+583) |  |
| 6.5.0 | 2026-11-06 | 2133<sub>(+177) | 2511<sub>(+273) | 2576<sub>(+242) |  |
| 6.3.0 | 2026-10-27 | 1956<sub>(+116) | 2238<sub>(+32) | 2334<sub>(-64) |  |
| 6.1.0 | 2026-09-24 | 1840 | 2206 | 2398 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.5.1 | 2026-11-07 | 2749<sub>(+652) | 3120<sub>(+651) | 3201<sub>(+560) |  |
| 6.5.0 | 2026-11-06 | 2097<sub>(+115) | 2469<sub>(+166) | 2641<sub>(+238) |  |
| 6.3.0 | 2026-10-27 | 1982<sub>(+100) | 2303<sub>(+39) | 2403<sub>(-4) |  |
| 6.1.0 | 2026-09-24 | 1882 | 2264 | 2407 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-09-24 | 1882 | 2264 | 2407 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Luminex+<version>&body=###%20Engine%20name%0ALuminex%0A%0A###%20Version%0A6.5.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-10 05:39:43

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.0", "6.3.0", "6.5.0", "6.5.1"]
  y-axis "Elo Rating" 1800 --> 3300
  line "E1: STC (8.0+0.08s)" [1840, 1956, 2133, 2615]
  line "E1: LTC (60.0+0.60s)" [2206, 2238, 2511, 3024]
  line "E1: VLTC (2m24s+1.12s)" [2398, 2334, 2576, 3159]
  line "P1: STC (8.0+0.08s)" [1882, 1982, 2097, 2749]
  line "P1: LTC (60.0+0.60s)" [2264, 2303, 2469, 3120]
  line "P1: VLTC (2m24s+1.12s)" [2407, 2403, 2641, 3201]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3201 | 34 | 278 | 60% | 3101 | 44% |
|  |  | E1 | 3159 | 32 | 308 | 58% | 3074 | 44% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3120 | 48 | 148 | 56% | 3046 | 32% |
|  |  | E1 | 3024 | 28 | 394 | 48% | 3035 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2749 | 45 | 168 | 57% | 2670 | 36% |
|  |  | E1 | 2615 | 37 | 240 | 55% | 2556 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2641 | 52 | 124 | 52% | 2624 | 24% |
|  |  | E1 | 2576 | 45 | 172 | 52% | 2553 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2469 | 54 | 120 | 52% | 2448 | 21% |
|  |  | E1 | 2511 | 40 | 208 | 52% | 2487 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2097 | 53 | 120 | 47% | 2122 | 26% |
|  |  | E1 | 2133 | 45 | 168 | 52% | 2115 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2403 | 50 | 140 | 53% | 2381 | 24% |
|  |  | E1 | 2334 | 39 | 240 | 50% | 2327 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2303 | 45 | 176 | 53% | 2277 | 18% |
|  |  | E1 | 2238 | 42 | 204 | 51% | 2232 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1982 | 42 | 204 | 47% | 2013 | 21% |
|  |  | E1 | 1956 | 42 | 212 | 51% | 1948 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2407 | 63 | 80 | 50% | 2407 | 30% |
|  |  | E1 | 2398 | 44 | 182 | 49% | 2410 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2264 | 48 | 164 | 55% | 2202 | 18% |
|  |  | E1 | 2206 | 43 | 200 | 52% | 2174 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1882 | 44 | 212 | 59% | 1750 | 18% |
|  |  | E1 | 1840 | 40 | 250 | 55% | 1742 | 17% |