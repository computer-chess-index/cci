# Engine: Anodos

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2040 | 2311 | 2427 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2229 | 2481 | 2546 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

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

Generated: 2026-10-10 04:35:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1700 --> 2500
  line "" [1754, 1808, 2001, 2163]
  line "STC (8.0+0.08s)" [1754, 1808, 2001, 2163]
  line "LTC (60.0+0.60s)" [1972, 2037, 2313, 2425]
  line "" [2033, 2159, 2395, 2500]
  line "VLTC (2m24s+1.12s)" [2033, 2159, 2395, 2500]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2500 | 26 | 494 | 49% | 2507 | 26% |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2546 | 51 | 136 | 53% | 2515 | 24% |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2427 | 40 | 220 | 49% | 2444 | 25% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2425 | 26 | 520 | 50% | 2427 | 27% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2481 | 47 | 168 | 46% | 2533 | 19% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2311 | 41 | 210 | 46% | 2372 | 30% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2163 | 24 | 608 | 49% | 2167 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2229 | 49 | 140 | 51% | 2221 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2040 | 43 | 202 | 47% | 2094 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2395 | 38 | 244 | 52% | 2375 | 25% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2313 | 41 | 196 | 49% | 2322 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2001 | 45 | 176 | 52% | 1983 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2159 | 37 | 256 | 51% | 2147 | 22% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2037 | 44 | 180 | 50% | 2036 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1808 | 40 | 228 | 50% | 1812 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2033 | 45 | 192 | 44% | 2129 | 18% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1972 | 49 | 156 | 48% | 1971 | 17% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1754 | 45 | 180 | 46% | 1802 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |