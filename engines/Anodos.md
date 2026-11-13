# Engine: Anodos

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2099<sub>(+100) | 2394<sub>(+38) | 2496<sub>(+123) |  |
| 1.2.0 | 2026-02-01 | 1999 | 2356 | 2373 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2094<sub>(+104) | 2321<sub>(+76) | 2412<sub>(+135) |  |
| 1.2.0 | 2026-02-01 | 1990 | 2245 | 2277 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2163<sub>(+162) | 2425<sub>(+112) | 2500<sub>(+105) |  |
| 1.2.0 | 2026-02-01 | 2001<sub>(+193) | 2313<sub>(+276) | 2395<sub>(+236) |  |
| 1.1.0 | 2026-01-16 | 1808<sub>(+54) | 2037<sub>(+65) | 2159<sub>(+126) |  |
| 1.0.0 | 2026-01-02 | 1754 | 1972 | 2033 | Previously: chess-rs |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Anodos+<version>&body=###%20Engine%20name%0AAnodos%0A%0A###%20Version%0A1.3.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-13 05:35:39

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1900 --> 2500
  line "E1: STC (8.0+0.08s)" [1999, 2099]
  line "E1: LTC (60.0+0.60s)" [2356, 2394]
  line "E1: VLTC (2m24s+1.12s)" [2373, 2496]
  line "P1: STC (8.0+0.08s)" [1990, 2094]
  line "P1: LTC (60.0+0.60s)" [2245, 2321]
  line "P1: VLTC (2m24s+1.12s)" [2277, 2412]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1700 --> 2500
  line "T1: STC (8.0+0.08s)" [1754, 1808, 2001, 2163]
  line "T1: LTC (60.0+0.60s)" [1972, 2037, 2313, 2425]
  line "T1: VLTC (2m24s+1.12s)" [2033, 2159, 2395, 2500]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2412 | 39 | 240 | 52% | 2414 | 24% |
|  |  | E1 | 2496 | 32 | 344 | 48% | 2531 | 28% |
|  |  | T1 | 2500 | 26 | 494 | 49% | 2507 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2394 | 32 | 346 | 48% | 2412 | 28% |
|  |  | T1 | 2425 | 26 | 520 | 50% | 2427 | 27% |
|  |  | P1 | 2321 | 39 | 236 | 50% | 2323 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2099 | 32 | 358 | 47% | 2147 | 20% |
|  |  | T1 | 2163 | 24 | 608 | 49% | 2167 | 24% |
|  |  | P1 | 2094 | 41 | 208 | 52% | 2086 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2395 | 38 | 244 | 52% | 2375 | 25% |
|  |  | P1 | 2277 | 212 | 14 | 7% | 2759 | 0% |
|  |  | E1 | 2373 | 143 | 20 | 63% | 2217 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2313 | 41 | 196 | 49% | 2322 | 28% |
|  |  | P1 | 2245 | 145 | 18 | 25% | 2561 | 28% |
|  |  | E1 | 2356 | 115 | 36 | 65% | 2232 | 14% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2001 | 45 | 176 | 52% | 1983 | 20% |
|  |  | P1 | 1990 | 108 | 32 | 66% | 1769 | 31% |
|  |  | E1 | 1999 | 108 | 40 | 40% | 2111 | 15% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2159 | 37 | 256 | 51% | 2147 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2037 | 44 | 180 | 50% | 2036 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1808 | 40 | 228 | 50% | 1812 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2033 | 45 | 192 | 44% | 2129 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1972 | 49 | 156 | 48% | 1971 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1754 | 45 | 180 | 46% | 1802 | 20% |