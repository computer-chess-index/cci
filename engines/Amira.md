# Engine: Amira

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/amira

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.82 | 2026-01-02 | 2225<sub>(+119) | 2504<sub>(+105) | 2627<sub>(+124) |  |
| 1.71 | 2025-10-30 | 2106 | 2399 | 2503 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.82 | 2026-01-02 | 2187<sub>(+63) | 2499<sub>(+168) | 2604<sub>(+151) |  |
| 1.71 | 2025-10-30 | 2124 | 2331 | 2453 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.82 | 2026-01-02 | 2309<sub>(+115) | 2549<sub>(+115) | 2634<sub>(+158) |  |
| 1.71 | 2025-10-30 | 2194 | 2434 | 2476 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Amira+<version>&body=###%20Engine%20name%0AAmira%0A%0A###%20Version%0A1.82" target="_blank">Submit new version</a>

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

Generated: 2026-11-23 05:35:37

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.71", "1.82"]
  y-axis "Elo Rating" 2100 --> 2700
  line "E1: STC (8.0+0.08s)" [2106, 2225]
  line "E1: LTC (60.0+0.60s)" [2399, 2504]
  line "E1: VLTC (2m24s+1.12s)" [2503, 2627]
  line "P1: STC (8.0+0.08s)" [2124, 2187]
  line "P1: LTC (60.0+0.60s)" [2331, 2499]
  line "P1: VLTC (2m24s+1.12s)" [2453, 2604]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.71", "1.82"]
  y-axis "Elo Rating" 2100 --> 2700
  line "T1: STC (8.0+0.08s)" [2194, 2309]
  line "T1: LTC (60.0+0.60s)" [2434, 2549]
  line "T1: VLTC (2m24s+1.12s)" [2476, 2634]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.82 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2604 | 34 | 310 | 50% | 2611 | 25% |
|  |  | E1 | 2627 | 29 | 420 | 54% | 2579 | 25% |
|  |  | T1 | 2634 | 22 | 710 | 48% | 2649 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2499 | 35 | 296 | 52% | 2485 | 27% |
|  |  | E1 | 2504 | 30 | 410 | 51% | 2485 | 26% |
|  |  | T1 | 2549 | 25 | 552 | 51% | 2535 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2225 | 31 | 384 | 50% | 2237 | 21% |
|  |  | T1 | 2309 | 23 | 694 | 51% | 2295 | 23% |
|  |  | P1 | 2187 | 34 | 312 | 51% | 2163 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.71 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2476 | 40 | 220 | 51% | 2466 | 21% |
|  |  | P1 | 2453 | 62 | 100 | 53% | 2392 | 20% |
|  |  | E1 | 2503 | 63 | 98 | 48% | 2499 | 17% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2434 | 39 | 248 | 52% | 2425 | 17% |
|  |  | P1 | 2331 | 72 | 76 | 39% | 2485 | 20% |
|  |  | E1 | 2399 | 59 | 110 | 50% | 2394 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2194 | 43 | 206 | 51% | 2184 | 12% |
|  |  | P1 | 2124 | 59 | 116 | 49% | 2157 | 12% |
|  |  | E1 | 2106 | 55 | 138 | 43% | 2194 | 14% |