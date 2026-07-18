# Engine: Anodos

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2138<sub>(+155) | 2419<sub>(+125) | 2481<sub>(+104) |  |
| 1.2.0 | 2026-02-01 | 1983<sub>(+192) | 2294<sub>(+276) | 2377<sub>(+237) |  |
| 1.1.0 | 2026-01-16 | 1791<sub>(+55) | 2018<sub>(+63) | 2140<sub>(+126) |  |
| 1.0.0 | 2026-01-02 | 1736<sub>(+new) | 1955<sub>(+new) | 2014<sub>(+new) | Previously: chess-rs |
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

Generated: 2026-07-18 06:22:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1700 --> 2500
  line "STC (8.0+0.08s)" [1736, 1791, 1983, 2138]
  line "STC (8.0+0.08s)" [1736, 1791, 1983, 2138]
  line "LTC (60.0+0.60s)" [1955, 2018, 2294, 2419]
  line "VLTC (2m24s+1.12s)" [2014, 2140, 2377, 2481]
  line "VLTC (2m24s+1.12s)" [2014, 2140, 2377, 2481]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1700 --> 2500
  line "STC (8.0+0.08s)" [1736, 1791, 1983, 2138]
  line "STC (8.0+0.08s)" [1736, 1791, 1983, 2138]
  line "LTC (60.0+0.60s)" [1955, 2018, 2294, 2419]
  line "VLTC (2m24s+1.12s)" [2014, 2140, 2377, 2481]
  line "VLTC (2m24s+1.12s)" [2014, 2140, 2377, 2481]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2481 | 28 | 438 | 49% | 2489 | 25% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2419 | 28 | 440 | 52% | 2404 | 28% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2138 | 25 | 548 | 49% | 2145 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2377 | 38 | 244 | 52% | 2357 | 25% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2294 | 41 | 196 | 49% | 2303 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1983 | 45 | 176 | 52% | 1967 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2140 | 37 | 256 | 51% | 2128 | 22% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2018 | 44 | 180 | 50% | 2017 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1791 | 40 | 228 | 50% | 1796 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2014 | 45 | 192 | 44% | 2110 | 18% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1955 | 49 | 156 | 48% | 1953 | 17% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1736 | 45 | 180 | 46% | 1786 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |