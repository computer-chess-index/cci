# Engine: Amira

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/amira

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.82 | 2026-01-02 | 2233<sub>(+112) | 2510<sub>(+76) | 2627<sub>(+112) |  |
| 1.71 | 2025-10-30 | 2121 | 2434 | 2515 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.82 | 2026-01-02 | 2203<sub>(+82) | 2511<sub>(+163) | 2628<sub>(+170) |  |
| 1.71 | 2025-10-30 | 2121 | 2348 | 2458 |  |
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

Generated: 2026-11-28 05:35:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.71", "1.82"]
  y-axis "Elo Rating" 2100 --> 2700
  line "E1: STC (8.0+0.08s)" [2121, 2233]
  line "E1: LTC (60.0+0.60s)" [2434, 2510]
  line "E1: VLTC (2m24s+1.12s)" [2515, 2627]
  line "P1: STC (8.0+0.08s)" [2121, 2203]
  line "P1: LTC (60.0+0.60s)" [2348, 2511]
  line "P1: VLTC (2m24s+1.12s)" [2458, 2628]
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
| 1.82 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2627 | 29 | 424 | 54% | 2581 | 25% |
|  |  | T1 | 2634 | 22 | 710 | 48% | 2649 | 29% |
|  |  | P1 | 2628 | 32 | 334 | 51% | 2626 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2510 | 29 | 426 | 51% | 2488 | 26% |
|  |  | T1 | 2549 | 25 | 552 | 51% | 2535 | 24% |
|  |  | P1 | 2511 | 34 | 304 | 52% | 2498 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2309 | 23 | 694 | 51% | 2295 | 23% |
|  |  | P1 | 2203 | 33 | 320 | 51% | 2175 | 22% |
|  |  | E1 | 2233 | 30 | 404 | 50% | 2240 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.71 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2476 | 40 | 220 | 51% | 2466 | 21% |
|  |  | P1 | 2458 | 58 | 112 | 52% | 2411 | 21% |
|  |  | E1 | 2515 | 62 | 102 | 50% | 2502 | 17% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2434 | 39 | 248 | 52% | 2425 | 17% |
|  |  | P1 | 2348 | 65 | 92 | 41% | 2471 | 20% |
|  |  | E1 | 2434 | 50 | 156 | 52% | 2408 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2194 | 43 | 206 | 51% | 2184 | 12% |
|  |  | P1 | 2121 | 56 | 128 | 48% | 2160 | 14% |
|  |  | E1 | 2121 | 50 | 166 | 45% | 2184 | 15% |