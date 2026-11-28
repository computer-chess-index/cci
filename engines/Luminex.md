# Engine: Luminex

Author: Cheng Chang

Home: https://github.com/changcheng967/Luminex

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-14 | 2850<sub>(+300) | 3197<sub>(+232) | 3325<sub>(+232) |  |
| 6.5.1 | 2026-11-07 | 2550<sub>(+449) | 2965<sub>(+503) | 3093<sub>(+558) |  |
| 6.5.0 | 2026-11-06 | 2101<sub>(+189) | 2462<sub>(+261) | 2535<sub>(+245) |  |
| 6.3.0 | 2026-10-27 | 1912<sub>(+121) | 2201<sub>(+34) | 2290<sub>(-62) |  |
| 6.1.0 | 2026-09-24 | 1791 | 2167 | 2352 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-14 | 2873<sub>(+243) | 3166<sub>(+176) | 3274<sub>(+219) |  |
| 6.5.1 | 2026-11-07 | 2630<sub>(+617) | 2990<sub>(+630) | 3055<sub>(+529) |  |
| 6.5.0 | 2026-11-06 | 2013<sub>(+97) | 2360<sub>(+131) | 2526<sub>(+204) |  |
| 6.3.0 | 2026-10-27 | 1916<sub>(+84) | 2229<sub>(+34) | 2322<sub>(+1) |  |
| 6.1.0 | 2026-09-24 | 1832 | 2195 | 2321 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-09-24 | 1832 | 2195 | 2321 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Luminex+<version>&body=###%20Engine%20name%0ALuminex%0A%0A###%20Version%0A6.6.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:40:14

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.0", "6.3.0", "6.5.0", "6.5.1", "6.6.0"]
  y-axis "Elo Rating" 1700 --> 3400
  line "E1: STC (8.0+0.08s)" [1791, 1912, 2101, 2550, 2850]
  line "E1: LTC (60.0+0.60s)" [2167, 2201, 2462, 2965, 3197]
  line "E1: VLTC (2m24s+1.12s)" [2352, 2290, 2535, 3093, 3325]
  line "P1: STC (8.0+0.08s)" [1832, 1916, 2013, 2630, 2873]
  line "P1: LTC (60.0+0.60s)" [2195, 2229, 2360, 2990, 3166]
  line "P1: VLTC (2m24s+1.12s)" [2321, 2322, 2526, 3055, 3274]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3325 | 34 | 224 | 51% | 3320 | 62% |
|  |  | P1 | 3274 | 42 | 144 | 52% | 3258 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3197 | 28 | 364 | 48% | 3210 | 55% |
|  |  | P1 | 3166 | 41 | 170 | 52% | 3150 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2873 | 34 | 262 | 52% | 2855 | 45% |
|  |  | E1 | 2850 | 34 | 264 | 51% | 2843 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3055 | 32 | 310 | 58% | 2977 | 44% |
|  |  | E1 | 3093 | 30 | 352 | 57% | 3023 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2990 | 45 | 168 | 55% | 2928 | 34% |
|  |  | E1 | 2965 | 26 | 450 | 48% | 2974 | 40% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2630 | 41 | 208 | 55% | 2573 | 33% |
|  |  | E1 | 2550 | 32 | 326 | 54% | 2492 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2526 | 50 | 144 | 52% | 2493 | 23% |
|  |  | E1 | 2535 | 41 | 208 | 53% | 2498 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2360 | 51 | 144 | 49% | 2385 | 19% |
|  |  | E1 | 2462 | 39 | 228 | 53% | 2425 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2013 | 46 | 164 | 48% | 2036 | 22% |
|  |  | E1 | 2101 | 41 | 200 | 52% | 2082 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2322 | 50 | 140 | 53% | 2299 | 24% |
|  |  | E1 | 2290 | 39 | 240 | 50% | 2283 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2229 | 45 | 176 | 53% | 2202 | 18% |
|  |  | E1 | 2201 | 42 | 204 | 51% | 2194 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1916 | 42 | 204 | 47% | 1947 | 21% |
|  |  | E1 | 1912 | 42 | 212 | 51% | 1902 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2352 | 44 | 182 | 49% | 2364 | 22% |
|  |  | P1 | 2321 | 63 | 80 | 50% | 2319 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2167 | 44 | 200 | 52% | 2134 | 16% |
|  |  | P1 | 2195 | 48 | 164 | 55% | 2134 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1832 | 44 | 212 | 59% | 1702 | 18% |
|  |  | E1 | 1791 | 40 | 250 | 55% | 1696 | 17% |