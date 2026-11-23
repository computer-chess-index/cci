# Engine: Anodos

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2075<sub>(+131) | 2398<sub>(+116) | 2512<sub>(+155) |  |
| 1.2.0 | 2026-02-01 | 1944 | 2282 | 2357 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2109<sub>(+124) | 2345<sub>(+80) | 2441<sub>(+185) |  |
| 1.2.0 | 2026-02-01 | 1985 | 2265 | 2256 |  |
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

Generated: 2026-11-23 05:35:44

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1900 --> 2600
  line "E1: STC (8.0+0.08s)" [1944, 2075]
  line "E1: LTC (60.0+0.60s)" [2282, 2398]
  line "E1: VLTC (2m24s+1.12s)" [2357, 2512]
  line "P1: STC (8.0+0.08s)" [1985, 2109]
  line "P1: LTC (60.0+0.60s)" [2265, 2345]
  line "P1: VLTC (2m24s+1.12s)" [2256, 2441]
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
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2500 | 26 | 494 | 49% | 2507 | 26% |
|  |  | P1 | 2441 | 37 | 272 | 53% | 2429 | 23% |
|  |  | E1 | 2512 | 30 | 392 | 48% | 2542 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2425 | 26 | 520 | 50% | 2427 | 27% |
|  |  | P1 | 2345 | 36 | 272 | 50% | 2333 | 24% |
|  |  | E1 | 2398 | 30 | 378 | 48% | 2415 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2163 | 24 | 608 | 49% | 2167 | 24% |
|  |  | P1 | 2109 | 39 | 248 | 53% | 2078 | 23% |
|  |  | E1 | 2075 | 30 | 410 | 46% | 2126 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2395 | 38 | 244 | 52% | 2375 | 25% |
|  |  | P1 | 2256 | 66 | 90 | 39% | 2414 | 18% |
|  |  | E1 | 2357 | 66 | 82 | 51% | 2341 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2265 | 62 | 86 | 45% | 2342 | 35% |
|  |  | E1 | 2282 | 55 | 119 | 51% | 2282 | 24% |
|  |  | T1 | 2313 | 41 | 196 | 49% | 2322 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1985 | 57 | 112 | 56% | 1890 | 25% |
|  |  | E1 | 1944 | 65 | 92 | 45% | 2014 | 20% |
|  |  | T1 | 2001 | 45 | 176 | 52% | 1983 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2159 | 37 | 256 | 51% | 2147 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2037 | 44 | 180 | 50% | 2036 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1808 | 40 | 228 | 50% | 1812 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2033 | 45 | 192 | 44% | 2129 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1972 | 49 | 156 | 48% | 1971 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1754 | 45 | 180 | 46% | 1802 | 20% |