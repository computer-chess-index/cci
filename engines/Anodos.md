# Engine: Anodos

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2202<sub>(+168) | 2481<sub>(+124) | 2547<sub>(+108) |  |
| 1.2.0 | 2026-02-01 | 2034<sub>(+201) | 2357<sub>(+285) | 2439<sub>(+240) |  |
| 1.1.0 | 2026-01-16 | 1833<sub>(+56) | 2072<sub>(+67) | 2199<sub>(+129) |  |
| 1.0.0 | 2026-01-02 | 1777<sub>(+new) | 2005<sub>(+new) | 2070<sub>(+new) | Previously: chess-rs |
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

Generated: 2026-05-18 06:22:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1700 --> 2600
  line "STC (8.0+0.08s)" [1777, 1833, 2034, 2202]
  line "STC (8.0+0.08s)" [1777, 1833, 2034, 2202]
  line "LTC (60.0+0.60s)" [2005, 2072, 2357, 2481]
  line "VLTC (2m24s+1.12s)" [2070, 2199, 2439, 2547]
  line "VLTC (2m24s+1.12s)" [2070, 2199, 2439, 2547]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2547 | 29 | 410 | 50% | 2547 | 25% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2481 | 29 | 408 | 52% | 2465 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2202 | 26 | 496 | 48% | 2217 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2439 | 38 | 244 | 52% | 2421 | 25% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2357 | 41 | 196 | 49% | 2365 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2034 | 45 | 176 | 52% | 2017 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2199 | 37 | 256 | 51% | 2186 | 22% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2072 | 44 | 180 | 50% | 2070 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1833 | 40 | 228 | 50% | 1837 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2070 | 45 | 192 | 44% | 2165 | 18% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2005 | 50 | 156 | 48% | 2003 | 17% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1777 | 45 | 180 | 46% | 1827 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |