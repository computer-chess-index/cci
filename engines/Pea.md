# Engine: Pea

Author: Warre Gevers

Home: https://github.com/WGCodings/Pea

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10.0.0 | 2026-11-09 | 3050<sub>(+235) | 3312<sub>(+176) | 3394<sub>(+200) |  |
| 9.1 | 2026-08-09 | 2815 | 3136 | 3194 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10.0.0 | 2026-11-09 | 3054<sub>(+243) | 3302<sub>(+166) | 3384<sub>(+232) |  |
| 9.1 | 2026-08-09 | 2811 | 3136 | 3152 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1 | 2026-08-09 | 2888<sub>(+181) | 3164<sub>(+121) | 3220<sub>(+141) |  |
| 9.0 | 2026-06-01 | 2707<sub>(+239) | 3043<sub>(+216) | 3079<sub>(+140) |  |
| 8.0 | 2026-05-02 | 2468<sub>(+118) | 2827<sub>(+130) | 2939<sub>(+120) |  |
| 7.0 | 2026-04-25 | 2350<sub>(+33) | 2697<sub>(+64) | 2819<sub>(+39) |  |
| 6.0 | 2026-04-20 | 2317<sub>(+320) | 2633<sub>(+222) | 2780<sub>(+218) |  |
| 5.0 | 2026-04-15 | 1997<sub>(+48) | 2411<sub>(+171) | 2562<sub>(+162) |  |
| 4.0 | 2026-04-11 | 1949<sub>(+222) | 2240<sub>(+165) | 2400<sub>(+178) |  |
| 3.0 | 2026-04-09 | 1727<sub>(+592) | 2075<sub>(+725) | 2222<sub>(+647) |  |
| 2.0 | 2026-04-08 | 1135<sub>(+395) | 1350<sub>(+535) | 1575<sub>(+657) |  |
| 1.0 | 2026-04-06 | 740 | 815 | 918 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pea+<version>&body=###%20Engine%20name%0APea%0A%0A###%20Version%0A9.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-14 05:40:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["9.1", "10.0.0"]
  y-axis "Elo Rating" 2800 --> 3400
  line "E1: STC (8.0+0.08s)" [2815, 3050]
  line "E1: LTC (60.0+0.60s)" [3136, 3312]
  line "E1: VLTC (2m24s+1.12s)" [3194, 3394]
  line "P1: STC (8.0+0.08s)" [2811, 3054]
  line "P1: LTC (60.0+0.60s)" [3136, 3302]
  line "P1: VLTC (2m24s+1.12s)" [3152, 3384]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0", "9.0", "9.1"]
  y-axis "Elo Rating" 700 --> 3300
  line "T1: STC (8.0+0.08s)" [740, 1135, 1727, 1949, 1997, 2317, 2350, 2468, 2707, 2888]
  line "T1: LTC (60.0+0.60s)" [815, 1350, 2075, 2240, 2411, 2633, 2697, 2827, 3043, 3164]
  line "T1: VLTC (2m24s+1.12s)" [918, 1575, 2222, 2400, 2562, 2780, 2819, 2939, 3079, 3220]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 10.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3384 | 35 | 208 | 56% | 3341 | 69% |
|  |  | E1 | 3394 | 30 | 288 | 53% | 3368 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3302 | 39 | 162 | 51% | 3297 | 70% |
|  |  | E1 | 3312 | 34 | 232 | 53% | 3294 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3054 | 41 | 166 | 48% | 3074 | 52% |
|  |  | E1 | 3050 | 31 | 294 | 53% | 3025 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 9.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3194 | 25 | 448 | 49% | 3202 | 52% |
|  |  | T1 | 3220 | 29 | 338 | 50% | 3217 | 56% |
|  |  | P1 | 3152 | 30 | 318 | 48% | 3167 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3136 | 26 | 418 | 47% | 3156 | 50% |
|  |  | T1 | 3164 | 29 | 324 | 51% | 3154 | 53% |
|  |  | P1 | 3136 | 32 | 270 | 48% | 3150 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2815 | 26 | 474 | 46% | 2853 | 38% |
|  |  | T1 | 2888 | 32 | 304 | 50% | 2886 | 40% |
|  |  | P1 | 2811 | 35 | 252 | 49% | 2832 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3079 | 28 | 364 | 51% | 3071 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3043 | 30 | 324 | 48% | 3058 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2707 | 29 | 404 | 53% | 2678 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2939 | 30 | 358 | 49% | 2947 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2827 | 32 | 302 | 50% | 2826 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2468 | 31 | 356 | 52% | 2439 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2819 | 34 | 270 | 52% | 2804 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2697 | 35 | 266 | 50% | 2700 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2350 | 33 | 320 | 48% | 2375 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2780 | 36 | 248 | 52% | 2763 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2633 | 36 | 274 | 51% | 2620 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2317 | 32 | 344 | 54% | 2279 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2562 | 33 | 324 | 49% | 2574 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2411 | 36 | 268 | 50% | 2410 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1997 | 36 | 276 | 50% | 1997 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2400 | 34 | 310 | 54% | 2361 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2240 | 36 | 272 | 49% | 2252 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1949 | 39 | 248 | 52% | 1932 | 14% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2222 | 40 | 232 | 51% | 2218 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2075 | 39 | 246 | 48% | 2095 | 14% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1727 | 43 | 208 | 47% | 1759 | 15% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1575 | 34 | 316 | 48% | 1605 | 17% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1350 | 39 | 258 | 46% | 1404 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1135 | 35 | 300 | 51% | 1108 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 918 | 79 | 110 | 38% | 1079 | 9% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 815 | 84 | 104 | 37% | 1035 | 8% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 740 | 90 | 92 | 38% | 946 | 3% |