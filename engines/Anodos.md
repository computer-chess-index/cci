# Engine: Anodos

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2082<sub>(+135) | 2400<sub>(+118) | 2510<sub>(+153) |  |
| 1.2.0 | 2026-02-01 | 1947 | 2282 | 2357 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2101<sub>(+137) | 2341<sub>(+80) | 2431<sub>(+203) |  |
| 1.2.0 | 2026-02-01 | 1964 | 2261 | 2228 |  |
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

Generated: 2026-11-18 05:35:47

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1900 --> 2600
  line "E1: STC (8.0+0.08s)" [1947, 2082]
  line "E1: LTC (60.0+0.60s)" [2282, 2400]
  line "E1: VLTC (2m24s+1.12s)" [2357, 2510]
  line "P1: STC (8.0+0.08s)" [1964, 2101]
  line "P1: LTC (60.0+0.60s)" [2261, 2341]
  line "P1: VLTC (2m24s+1.12s)" [2228, 2431]
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
|  |  | P1 | 2431 | 37 | 264 | 53% | 2417 | 23% |
|  |  | E1 | 2510 | 30 | 388 | 48% | 2539 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2425 | 26 | 520 | 50% | 2427 | 27% |
|  |  | P1 | 2341 | 38 | 256 | 51% | 2327 | 24% |
|  |  | E1 | 2400 | 31 | 374 | 49% | 2415 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2163 | 24 | 608 | 49% | 2167 | 24% |
|  |  | P1 | 2101 | 40 | 232 | 53% | 2072 | 23% |
|  |  | E1 | 2082 | 31 | 384 | 47% | 2130 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2395 | 38 | 244 | 52% | 2375 | 25% |
|  |  | P1 | 2228 | 77 | 66 | 33% | 2454 | 21% |
|  |  | E1 | 2357 | 66 | 82 | 51% | 2340 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2313 | 41 | 196 | 49% | 2322 | 28% |
|  |  | P1 | 2261 | 74 | 62 | 44% | 2361 | 31% |
|  |  | E1 | 2282 | 55 | 119 | 51% | 2282 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1964 | 63 | 92 | 57% | 1866 | 24% |
|  |  | E1 | 1947 | 65 | 92 | 45% | 2017 | 20% |
|  |  | T1 | 2001 | 45 | 176 | 52% | 1983 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2159 | 37 | 256 | 51% | 2147 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2037 | 44 | 180 | 50% | 2036 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1808 | 40 | 228 | 50% | 1812 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2033 | 45 | 192 | 44% | 2129 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1972 | 49 | 156 | 48% | 1971 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1754 | 45 | 180 | 46% | 1802 | 20% |