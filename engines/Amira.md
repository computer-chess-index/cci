# Engine: Amira

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/amira

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.82 | 2026-01-02 | 2230<sub>(+119) | 2503<sub>(+97) | 2626<sub>(+120) |  |
| 1.71 | 2025-10-30 | 2111 | 2406 | 2506 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.82 | 2026-01-02 | 2176<sub>(+81) | 2484<sub>(+167) | 2573<sub>(+171) |  |
| 1.71 | 2025-10-30 | 2095 | 2317 | 2402 |  |
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

Generated: 2026-11-17 05:35:39

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.71", "1.82"]
  y-axis "Elo Rating" 2000 --> 2700
  line "E1: STC (8.0+0.08s)" [2111, 2230]
  line "E1: LTC (60.0+0.60s)" [2406, 2503]
  line "E1: VLTC (2m24s+1.12s)" [2506, 2626]
  line "P1: STC (8.0+0.08s)" [2095, 2176]
  line "P1: LTC (60.0+0.60s)" [2317, 2484]
  line "P1: VLTC (2m24s+1.12s)" [2402, 2573]
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
| 1.82 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2634 | 22 | 710 | 48% | 2649 | 29% |
|  |  | P1 | 2573 | 35 | 290 | 49% | 2588 | 25% |
|  |  | E1 | 2626 | 31 | 376 | 54% | 2577 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2484 | 36 | 272 | 52% | 2477 | 27% |
|  |  | E1 | 2503 | 31 | 378 | 51% | 2487 | 24% |
|  |  | T1 | 2549 | 25 | 552 | 51% | 2535 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2176 | 36 | 276 | 51% | 2145 | 21% |
|  |  | E1 | 2230 | 31 | 376 | 50% | 2242 | 20% |
|  |  | T1 | 2309 | 23 | 694 | 51% | 2295 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.71 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2476 | 40 | 220 | 51% | 2466 | 21% |
|  |  | P1 | 2402 | 68 | 84 | 50% | 2377 | 21% |
|  |  | E1 | 2506 | 63 | 98 | 48% | 2502 | 17% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2434 | 39 | 248 | 52% | 2425 | 17% |
|  |  | P1 | 2317 | 79 | 64 | 37% | 2496 | 20% |
|  |  | E1 | 2406 | 59 | 110 | 50% | 2400 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2194 | 43 | 206 | 51% | 2184 | 12% |
|  |  | P1 | 2095 | 66 | 96 | 48% | 2149 | 10% |
|  |  | E1 | 2111 | 55 | 138 | 43% | 2199 | 14% |