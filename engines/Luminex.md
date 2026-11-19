# Engine: Luminex

Author: Cheng Chang

Home: https://github.com/changcheng967/Luminex

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-14 | 2844<sub>(+292) | 3216<sub>(+247) | 3329<sub>(+237) |  |
| 6.5.1 | 2026-11-07 | 2552<sub>(+454) | 2969<sub>(+511) | 3092<sub>(+562) |  |
| 6.5.0 | 2026-11-06 | 2098<sub>(+189) | 2458<sub>(+263) | 2530<sub>(+244) |  |
| 6.3.0 | 2026-10-27 | 1909<sub>(+120) | 2195<sub>(+34) | 2286<sub>(-62) |  |
| 6.1.0 | 2026-09-24 | 1789 | 2161 | 2348 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-14 | 2819<sub>(+215) | 3147<sub>(+190) | 3240<sub>(+216) |  |
| 6.5.1 | 2026-11-07 | 2604<sub>(+609) | 2957<sub>(+616) | 3024<sub>(+524) |  |
| 6.5.0 | 2026-11-06 | 1995<sub>(+97) | 2341<sub>(+135) | 2500<sub>(+201) |  |
| 6.3.0 | 2026-10-27 | 1898<sub>(+80) | 2206<sub>(+32) | 2299<sub>(0) |  |
| 6.1.0 | 2026-09-24 | 1818 | 2174 | 2299 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-09-24 | 1818 | 2174 | 2299 |  |
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

Generated: 2026-11-19 05:40:07

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.0", "6.3.0", "6.5.0", "6.5.1", "6.6.0"]
  y-axis "Elo Rating" 1700 --> 3400
  line "E1: STC (8.0+0.08s)" [1789, 1909, 2098, 2552, 2844]
  line "E1: LTC (60.0+0.60s)" [2161, 2195, 2458, 2969, 3216]
  line "E1: VLTC (2m24s+1.12s)" [2348, 2286, 2530, 3092, 3329]
  line "P1: STC (8.0+0.08s)" [1818, 1898, 1995, 2604, 2819]
  line "P1: LTC (60.0+0.60s)" [2174, 2206, 2341, 2957, 3147]
  line "P1: VLTC (2m24s+1.12s)" [2299, 2299, 2500, 3024, 3240]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3240 | 51 | 96 | 53% | 3217 | 68% |
|  |  | E1 | 3329 | 39 | 168 | 51% | 3320 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3147 | 54 | 100 | 55% | 3104 | 48% |
|  |  | E1 | 3216 | 32 | 260 | 49% | 3217 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2819 | 46 | 142 | 50% | 2816 | 42% |
|  |  | E1 | 2844 | 41 | 184 | 51% | 2836 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3024 | 32 | 302 | 58% | 2942 | 43% |
|  |  | E1 | 3092 | 30 | 344 | 57% | 3023 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2957 | 46 | 160 | 56% | 2889 | 33% |
|  |  | E1 | 2969 | 27 | 430 | 48% | 2977 | 40% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2604 | 43 | 188 | 56% | 2541 | 34% |
|  |  | E1 | 2552 | 33 | 302 | 55% | 2483 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2500 | 50 | 144 | 52% | 2468 | 23% |
|  |  | E1 | 2530 | 41 | 208 | 53% | 2492 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2341 | 51 | 144 | 49% | 2364 | 19% |
|  |  | E1 | 2458 | 39 | 228 | 53% | 2421 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1995 | 46 | 164 | 48% | 2018 | 22% |
|  |  | E1 | 2098 | 41 | 200 | 52% | 2080 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2299 | 50 | 140 | 53% | 2276 | 24% |
|  |  | E1 | 2286 | 39 | 240 | 50% | 2279 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2206 | 45 | 176 | 53% | 2179 | 18% |
|  |  | E1 | 2195 | 42 | 204 | 51% | 2188 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1898 | 42 | 204 | 47% | 1931 | 21% |
|  |  | E1 | 1909 | 42 | 212 | 51% | 1901 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2299 | 63 | 80 | 50% | 2299 | 30% |
|  |  | E1 | 2348 | 44 | 182 | 49% | 2360 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2174 | 48 | 164 | 55% | 2113 | 18% |
|  |  | E1 | 2161 | 44 | 200 | 52% | 2130 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1818 | 44 | 212 | 59% | 1690 | 18% |
|  |  | E1 | 1789 | 40 | 250 | 55% | 1694 | 17% |