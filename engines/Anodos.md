# Engine: Anodos

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2153<sub>(+160) | 2421<sub>(+118) | 2489<sub>(+104) |  |
| 1.2.0 | 2026-02-01 | 1993<sub>(+192) | 2303<sub>(+274) | 2385<sub>(+234) |  |
| 1.1.0 | 2026-01-16 | 1801<sub>(+55) | 2029<sub>(+65) | 2151<sub>(+127) |  |
| 1.0.0 | 2026-01-02 | 1746 | 1964 | 2024 | Previously: chess-rs |
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

Generated: 2026-08-24 06:22:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1700 --> 2500
  line "STC (8.0+0.08s)" [1746, 1801, 1993, 2153]
  line "STC (8.0+0.08s)" [1746, 1801, 1993, 2153]
  line "LTC (60.0+0.60s)" [1964, 2029, 2303, 2421]
  line "VLTC (2m24s+1.12s)" [2024, 2151, 2385, 2489]
  line "VLTC (2m24s+1.12s)" [2024, 2151, 2385, 2489]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2489 | 27 | 478 | 49% | 2496 | 26% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2421 | 26 | 496 | 51% | 2417 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2153 | 24 | 588 | 49% | 2157 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2385 | 38 | 244 | 52% | 2365 | 25% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2303 | 41 | 196 | 49% | 2313 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1993 | 45 | 176 | 52% | 1975 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2151 | 37 | 256 | 51% | 2137 | 22% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2029 | 44 | 180 | 50% | 2026 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1801 | 40 | 228 | 50% | 1805 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2024 | 45 | 192 | 44% | 2120 | 18% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1964 | 49 | 156 | 48% | 1963 | 17% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1746 | 45 | 180 | 46% | 1796 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |