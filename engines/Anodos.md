# Engine: Anodos

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2141<sub>(+148) | 2425<sub>(+123) | 2493<sub>(+109) |  |
| 1.2.0 | 2026-02-01 | 1993<sub>(+193) | 2302<sub>(+276) | 2384<sub>(+236) |  |
| 1.1.0 | 2026-01-16 | 1800<sub>(+54) | 2026<sub>(+63) | 2148<sub>(+126) |  |
| 1.0.0 | 2026-01-02 | 1746<sub>(+new) | 1963<sub>(+new) | 2022<sub>(+new) | Previously: chess-rs |
| 0.7.0 | 2025-12-31 |  |  |  |  |
| 0.6.0 | 2025-11-11 |  |  |  |  |
| 0.5.1 | 2025-11-04 |  |  |  |  |
| 0.5.0 | 2025-11-03 |  |  |  |  |
| 0.4.2 | 2025-10-13 |  |  |  |  |
| 0.4.1 | 2025-10-09 |  |  |  |  |
| 0.4.0 | 2025-10-09 |  |  |  |  |
| 0.3.0 | 2025-10-05 |  |  |  |  |
| 0.2.0 | 2023-03-12 |  |  |  |  |
| 0.1.1 | 2022-12-03 |  |  |  |  |
| 0.1.0 | 2022-12-03 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Anodos+<version>&body=###%20Engine%20name%0AAnodos%0A%0A###%20Version%0A1.3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-22 06:22:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1700 --> 2500
  line "STC (8.0+0.08s)" [1746, 1800, 1993, 2141]
  line "STC (8.0+0.08s)" [1746, 1800, 1993, 2141]
  line "LTC (60.0+0.60s)" [1963, 2026, 2302, 2425]
  line "VLTC (2m24s+1.12s)" [2022, 2148, 2384, 2493]
  line "VLTC (2m24s+1.12s)" [2022, 2148, 2384, 2493]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2493 | 29 | 414 | 50% | 2492 | 25% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2425 | 29 | 412 | 52% | 2410 | 28% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2141 | 26 | 512 | 48% | 2153 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2384 | 38 | 244 | 52% | 2365 | 25% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2302 | 41 | 196 | 49% | 2311 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1993 | 45 | 176 | 52% | 1975 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2148 | 37 | 256 | 51% | 2134 | 22% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2026 | 44 | 180 | 50% | 2025 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1800 | 40 | 228 | 50% | 1804 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2022 | 45 | 192 | 44% | 2118 | 18% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1963 | 49 | 156 | 48% | 1962 | 17% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1746 | 45 | 180 | 46% | 1794 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |