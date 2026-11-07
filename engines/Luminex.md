# Engine: Luminex

Author: Cheng Chang

Home: https://github.com/changcheng967/Luminex

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.5.1 | 2026-11-07 | 2619<sub>(+472) | 3054<sub>(+519) | 3173<sub>(+573) |  |
| 6.5.0 | 2026-11-06 | 2147<sub>(+172) | 2535<sub>(+282) | 2600<sub>(+250) |  |
| 6.3.0 | 2026-10-27 | 1975<sub>(+123) | 2253<sub>(+34) | 2350<sub>(-64) |  |
| 6.1.0 | 2026-09-24 | 1852 | 2219 | 2414 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.5.1 | 2026-11-07 | 2789<sub>(+633) | 3155<sub>(+622) | 3147<sub>(+460) |  |
| 6.5.0 | 2026-11-06 | 2156<sub>(+127) | 2533<sub>(+181) | 2687<sub>(+235) |  |
| 6.3.0 | 2026-10-27 | 2029<sub>(+98) | 2352<sub>(+39) | 2452<sub>(-2) |  |
| 6.1.0 | 2026-09-24 | 1931 | 2313 | 2454 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-09-24 | 1931 | 2313 | 2454 |  |
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

Generated: 2026-11-07 06:43:44

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.0", "6.3.0", "6.5.0", "6.5.1"]
  y-axis "Elo Rating" 1800 --> 3200
  line "E1: STC (8.0+0.08s)" [1852, 1975, 2147, 2619]
  line "E1: LTC (60.0+0.60s)" [2219, 2253, 2535, 3054]
  line "E1: VLTC (2m24s+1.12s)" [2414, 2350, 2600, 3173]
  line "P1: STC (8.0+0.08s)" [1931, 2029, 2156, 2789]
  line "P1: LTC (60.0+0.60s)" [2313, 2352, 2533, 3155]
  line "P1: VLTC (2m24s+1.12s)" [2454, 2452, 2687, 3147]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3173 | 43 | 184 | 63% | 3032 | 36% |
|  |  | P1 | 3147 | 72 | 72 | 67% | 2963 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3054 | 44 | 164 | 47% | 3060 | 38% |
|  |  | P1 | 3155 | 70 | 76 | 61% | 3008 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2789 | 68 | 76 | 64% | 2624 | 38% |
|  |  | E1 | 2619 | 58 | 104 | 61% | 2496 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2687 | 52 | 124 | 52% | 2672 | 24% |
|  |  | E1 | 2600 | 46 | 160 | 53% | 2565 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2533 | 55 | 116 | 54% | 2493 | 22% |
|  |  | E1 | 2535 | 41 | 200 | 53% | 2504 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2156 | 54 | 116 | 48% | 2172 | 26% |
|  |  | E1 | 2147 | 45 | 164 | 52% | 2129 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2350 | 39 | 240 | 50% | 2344 | 18% |
|  |  | P1 | 2452 | 50 | 140 | 53% | 2430 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2253 | 42 | 204 | 51% | 2245 | 15% |
|  |  | P1 | 2352 | 45 | 176 | 53% | 2325 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2029 | 42 | 204 | 47% | 2061 | 21% |
|  |  | E1 | 1975 | 42 | 212 | 51% | 1966 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2454 | 63 | 80 | 50% | 2454 | 30% |
|  |  | E1 | 2414 | 44 | 182 | 49% | 2426 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2313 | 48 | 164 | 55% | 2249 | 18% |
|  |  | E1 | 2219 | 43 | 200 | 52% | 2188 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1931 | 44 | 212 | 59% | 1796 | 18% |
|  |  | E1 | 1852 | 40 | 250 | 55% | 1754 | 17% |