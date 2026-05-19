# Engine: Anodos

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2160<sub>(+153) | 2441<sub>(+124) | 2506<sub>(+107) |  |
| 1.2.0 | 2026-02-01 | 2007<sub>(+193) | 2317<sub>(+274) | 2399<sub>(+236) |  |
| 1.1.0 | 2026-01-16 | 1814<sub>(+55) | 2043<sub>(+65) | 2163<sub>(+124) |  |
| 1.0.0 | 2026-01-02 | 1759<sub>(+new) | 1978<sub>(+new) | 2039<sub>(+new) | Previously: chess-rs |
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

Generated: 2026-05-19 06:22:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1700 --> 2600
  line "STC (8.0+0.08s)" [1759, 1814, 2007, 2160]
  line "STC (8.0+0.08s)" [1759, 1814, 2007, 2160]
  line "LTC (60.0+0.60s)" [1978, 2043, 2317, 2441]
  line "VLTC (2m24s+1.12s)" [2039, 2163, 2399, 2506]
  line "VLTC (2m24s+1.12s)" [2039, 2163, 2399, 2506]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2506 | 29 | 410 | 50% | 2506 | 25% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2441 | 29 | 408 | 52% | 2425 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2160 | 26 | 504 | 48% | 2171 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2399 | 38 | 244 | 52% | 2379 | 25% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2317 | 41 | 196 | 49% | 2326 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2007 | 45 | 176 | 52% | 1990 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2163 | 37 | 256 | 51% | 2149 | 22% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2043 | 44 | 180 | 50% | 2040 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1814 | 40 | 228 | 50% | 1818 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2039 | 45 | 192 | 44% | 2133 | 18% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1978 | 49 | 156 | 48% | 1975 | 17% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1759 | 45 | 180 | 46% | 1809 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |