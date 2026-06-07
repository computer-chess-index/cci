# Engine: Anodos

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2140<sub>(+149) | 2422<sub>(+122) | 2492<sub>(+108) |  |
| 1.2.0 | 2026-02-01 | 1991<sub>(+193) | 2300<sub>(+275) | 2384<sub>(+237) |  |
| 1.1.0 | 2026-01-16 | 1798<sub>(+55) | 2025<sub>(+63) | 2147<sub>(+126) |  |
| 1.0.0 | 2026-01-02 | 1743<sub>(+new) | 1962<sub>(+new) | 2021<sub>(+new) | Previously: chess-rs |
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

Generated: 2026-06-07 06:22:28

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1700 --> 2500
  line "STC (8.0+0.08s)" [1743, 1798, 1991, 2140]
  line "STC (8.0+0.08s)" [1743, 1798, 1991, 2140]
  line "LTC (60.0+0.60s)" [1962, 2025, 2300, 2422]
  line "VLTC (2m24s+1.12s)" [2021, 2147, 2384, 2492]
  line "VLTC (2m24s+1.12s)" [2021, 2147, 2384, 2492]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2492 | 29 | 414 | 50% | 2491 | 25% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2422 | 28 | 416 | 51% | 2410 | 28% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2140 | 26 | 512 | 48% | 2153 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2384 | 38 | 244 | 52% | 2364 | 25% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2300 | 41 | 196 | 49% | 2310 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1991 | 45 | 176 | 52% | 1974 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2147 | 37 | 256 | 51% | 2133 | 22% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2025 | 44 | 180 | 50% | 2024 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1798 | 40 | 228 | 50% | 1802 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2021 | 45 | 192 | 44% | 2117 | 18% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1962 | 49 | 156 | 48% | 1960 | 17% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1743 | 45 | 180 | 46% | 1793 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |