# Engine: Anodos

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2151<sub>(+160) | 2419<sub>(+119) | 2485<sub>(+102) |  |
| 1.2.0 | 2026-02-01 | 1991<sub>(+193) | 2300<sub>(+274) | 2383<sub>(+235) |  |
| 1.1.0 | 2026-01-16 | 1798<sub>(+54) | 2026<sub>(+64) | 2148<sub>(+127) |  |
| 1.0.0 | 2026-01-02 | 1744 | 1962 | 2021 | Previously: chess-rs |
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

Generated: 2026-08-21 06:22:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1700 --> 2500
  line "STC (8.0+0.08s)" [1744, 1798, 1991, 2151]
  line "STC (8.0+0.08s)" [1744, 1798, 1991, 2151]
  line "LTC (60.0+0.60s)" [1962, 2026, 2300, 2419]
  line "VLTC (2m24s+1.12s)" [2021, 2148, 2383, 2485]
  line "VLTC (2m24s+1.12s)" [2021, 2148, 2383, 2485]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2485 | 27 | 470 | 49% | 2493 | 26% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2419 | 26 | 492 | 51% | 2414 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2151 | 24 | 584 | 49% | 2153 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2383 | 38 | 244 | 52% | 2363 | 25% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2300 | 41 | 196 | 49% | 2310 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1991 | 45 | 176 | 52% | 1974 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2148 | 37 | 256 | 51% | 2134 | 22% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2026 | 44 | 180 | 50% | 2025 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1798 | 40 | 228 | 50% | 1802 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2021 | 45 | 192 | 44% | 2118 | 18% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1962 | 49 | 156 | 48% | 1960 | 17% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1744 | 45 | 180 | 46% | 1793 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |