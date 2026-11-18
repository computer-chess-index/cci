# Engine: Ankax

Author: Amrou Anka

Home: https://github.com/amrouanka/ankax-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.6 | 2026-11-12 | 2094<sub>(-24) | 2454<sub>(+114) | 2534<sub>(+82) |  |
| 1.0.4 | 2026-11-10 | 2118 | 2340 | 2452 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.6 | 2026-11-12 | 2060<sub>(+24) | 2414<sub>(+58) | 2502<sub>(+185) |  |
| 1.0.4 | 2026-11-10 | 2036 | 2356 | 2317 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.4 | 2026-11-10 | 2036 | 2356 | 2317 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ankax+<version>&body=###%20Engine%20name%0AAnkax%0A%0A###%20Version%0A1.0.6" target="_blank">Submit new version</a>

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

Generated: 2026-11-18 05:35:39

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.4", "1.0.6"]
  y-axis "Elo Rating" 2000 --> 2600
  line "E1: STC (8.0+0.08s)" [2118, 2094]
  line "E1: LTC (60.0+0.60s)" [2340, 2454]
  line "E1: VLTC (2m24s+1.12s)" [2452, 2534]
  line "P1: STC (8.0+0.08s)" [2036, 2060]
  line "P1: LTC (60.0+0.60s)" [2356, 2414]
  line "P1: VLTC (2m24s+1.12s)" [2317, 2502]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2502 | 52 | 120 | 43% | 2573 | 31% |
|  |  | E1 | 2534 | 56 | 100 | 54% | 2499 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2454 | 58 | 104 | 53% | 2425 | 21% |
|  |  | P1 | 2414 | 51 | 128 | 46% | 2445 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2094 | 48 | 160 | 44% | 2159 | 23% |
|  |  | P1 | 2060 | 52 | 128 | 43% | 2130 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2317 | 43 | 186 | 49% | 2323 | 24% |
|  |  | E1 | 2452 | 41 | 204 | 52% | 2438 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2356 | 49 | 150 | 58% | 2286 | 28% |
|  |  | E1 | 2340 | 41 | 204 | 50% | 2326 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2036 | 47 | 172 | 51% | 1989 | 18% |
|  |  | E1 | 2118 | 42 | 208 | 56% | 2040 | 22% |